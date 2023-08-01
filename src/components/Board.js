import React from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  const firstRow = squares.slice(0, 3);
  const secondRow = squares.slice(3, 6);
  const thirdRow = squares.slice(6, 9);

  return (
    <div className="board">
      <div>
        <div className="board-row">
          {firstRow.map((square, index) => (
            <Square
              key={index}
              index={index}
              square={square}
              handleClick={handleClick}
            />
          ))}
        </div>
        <div className="board-row">
          {secondRow.map((square, index) => (
            <Square
              key={index}
              index={3 + index}
              square={square}
              handleClick={handleClick}
            />
          ))}
        </div>
        <div className="board-row">
          {thirdRow.map((square, index) => (
            <Square
              key={index}
              index={6 + index}
              square={square}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
