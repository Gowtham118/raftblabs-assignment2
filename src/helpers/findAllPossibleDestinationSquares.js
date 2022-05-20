export const findAllPossibleDestinationSquares = (position) => {
  let x = position[0];
  let y = position[1];
  const row = [2, 1, -1, -2, -2, -1, 1, 2, 2];
  const col = [1, 2, 2, 1, -1, -2, -2, -1, 1];

  const possibleToMoveTo = [];

  for (let i = 0; i < row.length; i++) {
    const x1 = x + row[i];
    const y1 = y + col[i];
    if (x1 >= 0 && x1 < 8 && y1 >= 0 && y1 < 8) {
      possibleToMoveTo.push([x1, y1]);
    }
  }
  return possibleToMoveTo;
};
