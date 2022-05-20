export default function buildTheBoard() {
    let board = [];
    for (let i = 0; i < 8; i++) {
      board.push([]);
    }
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        board[i].push([i, j]);
      }
    }
    return board;
  }
  