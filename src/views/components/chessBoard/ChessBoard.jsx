import React, { useState } from "react";
import { Button } from "antd";

import buildTheBoard from "../../../helpers/buildTheBoard.helper";
import { findAllPossibleDestinationSquares } from "../../../helpers/findAllPossibleDestinationSquares";

import styles from "./chessBoard.module.scss";

const ChessBoard = () => {
  const board = buildTheBoard();
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [selectedSquare, setSelectedSquare] = useState(null);

  return (
    <div className={styles.chessBoard}>
      {board.map((i) =>
        i.map((j, index) => (
          <div
            onClick={() => {
              setSelectedSquare(j);
              setPossibleMoves(findAllPossibleDestinationSquares(j));
            }}
            key={index}
            className={styles.cell}
            style={{
              background:
                possibleMoves.length > 0 &&
                possibleMoves.some(
                  (square) => square[0] === j[0] && square[1] === j[1]
                )
                  ? "green"
                  : selectedSquare && selectedSquare[0] === j[0] && selectedSquare[1] === j[1]
                  ? "white"
                  : (j[0] + j[1]) % 2 === 0
                  ? "#F2D9BB"
                  : "#BF8969",
              gridColumn: `${index + 1} / span 1`,
            }}
          ></div>
        ))
      )}
      <Button type="primary" className={styles.button} onClick={()=>{setPossibleMoves([]);setSelectedSquare(null)}}>Reset</Button>
    </div>
  );
};

export default ChessBoard;
