export type CheckersPieceConfig = {
  position: number[];
  color: string;
} | null;

// Each position based on the chess-board-art.jpeg image
// Each tile is 5 units away from each other
export const checkersPiecePositions: CheckersPieceConfig[][] = [
  [
    { position: [-17.5, 3, -17.5], color: 'red' },
    null,
    { position: [-7.5, 3, -17.5], color: 'red' },
    null,
    { position: [2.5, 3, -17.5], color: 'red' },
    null,
    { position: [12.5, 3, -17.5], color: 'red' },
    null,
  ],
  [
    null,
    { position: [-12.5, 3, -12.5], color: 'red' },
    null,
    { position: [-2.5, 3, -12.5], color: 'red' },
    null,
    { position: [7.5, 3, -12.5], color: 'red' },
    null,
    { position: [17.5, 3, -12.5], color: 'red' },
  ],
  [
    { position: [-17.5, 3, -7.5], color: 'red' },
    null,
    { position: [-7.5, 3, -7.5], color: 'red' },
    null,
    { position: [2.5, 3, -7.5], color: 'red' },
    null,
    { position: [12.5, 3, -7.5], color: 'red' },
    null,
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    null,
    { position: [-12.5, 3, 7.5], color: '#3c3c3c' },
    null,
    { position: [-2.5, 3, 7.5], color: '#3c3c3c' },
    null,
    { position: [7.5, 3, 7.5], color: '#3c3c3c' },
    null,
    { position: [17.5, 3, 7.5], color: '#3c3c3c' },
  ],
  [
    null,
    { position: [-17.5, 3, 12.5], color: '#3c3c3c' },
    null,
    { position: [-7.5, 3, 12.5], color: '#3c3c3c' },
    null,
    { position: [2.5, 3, 12.5], color: '#3c3c3c' },
    null,
    { position: [12.5, 3, 12.5], color: '#3c3c3c' },
  ],
  [
    { position: [-12.5, 3, 17.5], color: '#3c3c3c' },
    null,
    { position: [-2.5, 3, 17.5], color: '#3c3c3c' },
    null,
    { position: [7.5, 3, 17.5], color: '#3c3c3c' },
    null,
    { position: [17.5, 3, 17.5], color: '#3c3c3c' },
    null,
  ],
];

export const getNearestBoardPosition = (position: [number, number, number]) =>
  position.map((coordinate, i) => {
    if (i === 1) {
      return coordinate;
    }
    const isNegative = coordinate < 0;
    let closest = 2.5;
    let smallestDifference = Infinity;
    const centers = [2.5, 7.5, 12.5, 17.5];
    for (const center of centers) {
      const difference = Math.abs(coordinate) - center;
      if (Math.abs(difference) < smallestDifference) {
        closest = center;
        smallestDifference = difference;
      }
    }
    return isNegative ? -closest : closest;
  });
