import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">"Your code here"</div>
        <div className="board-row">"Your code here"</div>
        <div className="board-row">"Your code here"</div>
      </div>
    </div>
  );
}