import React from "react";

function Square({ square, index, handleClick }) {
  return (
    <button className={"square"} onClick={() => handleClick(index)}>
      {square}
    </button>
  );
}

export default Square;
