import "./App.css";

function App() {
  function CreateSodoku() {
    const board = Array.from({
      length: 3,
    }).map(() => Array.from({ length: 3 }).map(() => 1));

    // 3 =>  1

    return board;
  }

  CreateSodoku();

  const createCell = (number: number, islocked: boolean) => {
    return {
      number: number,
      isLocked: islocked,
    };
  };

  const boardBase = [
    [createCell(2, true), createCell(1, true), , createCell(5, false)],
    [createCell(4, true), createCell(3, true), , createCell(7, true)],
    [createCell(8, true), createCell(6, false), , createCell(9, false)],
  ];

  return (
    <>
      <h1>Sodoku</h1>

      <div className="board">
        {boardBase.map((row) => (
          <div className="row">
            {row.map((cell) => (
              <input
                className="cell"
                value={cell?.isLocked ? cell.number : ""}
                disabled={cell?.isLocked}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
