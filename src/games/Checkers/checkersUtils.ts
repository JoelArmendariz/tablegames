import { Tuple } from '../../types/CommonTypes';
import { CheckersPieceConfig } from '../../types/checkersTypes';

// Each position based on the chess-board-art.jpeg image
// Each tile is 5 units away from each other
export const checkersPiecePositions: CheckersPieceConfig[][] = [
  [
    { position: [-3.5, 0.6, -3.5], color: 'red' },
    null,
    { position: [-1.5, 0.6, -3.5], color: 'red' },
    null,
    { position: [0.5, 0.6, -3.5], color: 'red' },
    null,
    { position: [2.5, 0.6, -3.5], color: 'red' },
    null,
  ],
  [
    null,
    { position: [-2.5, 0.6, -2.5], color: 'red' },
    null,
    { position: [-0.5, 0.6, -2.5], color: 'red' },
    null,
    { position: [1.5, 0.6, -2.5], color: 'red' },
    null,
    { position: [3.5, 0.6, -2.5], color: 'red' },
  ],
  [
    { position: [-3.5, 0.6, -1.5], color: 'red' },
    null,
    { position: [-1.5, 0.6, -1.5], color: 'red' },
    null,
    { position: [0.5, 0.6, -1.5], color: 'red' },
    null,
    { position: [2.5, 0.6, -1.5], color: 'red' },
    null,
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    null,
    { position: [-2.5, 0.6, 1.5], color: '#3c3c3c' },
    null,
    { position: [-0.5, 0.6, 1.5], color: '#3c3c3c' },
    null,
    { position: [1.5, 0.6, 1.5], color: '#3c3c3c' },
    null,
    { position: [3.5, 0.6, 1.5], color: '#3c3c3c' },
  ],
  [
    null,
    { position: [-3.5, 0.6, 2.5], color: '#3c3c3c' },
    null,
    { position: [-1.5, 0.6, 2.5], color: '#3c3c3c' },
    null,
    { position: [0.5, 0.6, 2.5], color: '#3c3c3c' },
    null,
    { position: [2.5, 0.6, 2.5], color: '#3c3c3c' },
  ],
  [
    { position: [-2.5, 0.6, 3.5], color: '#3c3c3c' },
    null,
    { position: [-0.5, 0.6, 3.5], color: '#3c3c3c' },
    null,
    { position: [1.5, 0.6, 3.5], color: '#3c3c3c' },
    null,
    { position: [3.5, 0.6, 3.5], color: '#3c3c3c' },
    null,
  ],
];

export const getNearestBoardPosition = (position: Tuple) =>
  position.map((coordinate, i) => {
    if (i === 1 || position.find(coor => Math.abs(coor) > 4.5 && Math.abs(coor) < 7)) {
      return coordinate;
    }
    const isNegative = coordinate < 0;
    let closest = 2.5;
    let smallestDifference = Infinity;
    const centers = [0.5, 1.5, 2.5, 3.5, 4.5, 7];
    for (const center of centers) {
      const difference = Math.abs(coordinate) - center;
      if (Math.abs(difference) < smallestDifference) {
        closest = center;
        smallestDifference = difference;
      }
    }
    return isNegative ? -closest : closest;
  }) as Tuple;
