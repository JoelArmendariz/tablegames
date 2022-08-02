import { Tuple } from '../../types/CommonTypes';
import { ChessPieceNodeKey } from './ChessPiece';

export const chessPiecePositions: {
  position: Tuple;
  key: ChessPieceNodeKey;
  color: string;
}[] = [
  // { position: [4.75, 1, 0], key: ChessPieceNodeKey.Knight, color: 'red' }, // TODO fix knight position
  // White player
  { position: [-3.5, 1, 2.5], key: ChessPieceNodeKey.Pawn, color: 'blue' },
  { position: [-2.5, 1, 2.5], key: ChessPieceNodeKey.Pawn, color: 'blue' },
  { position: [-1.5, 1, 2.5], key: ChessPieceNodeKey.Pawn, color: 'blue' },
  { position: [-0.5, 1, 2.5], key: ChessPieceNodeKey.Pawn, color: 'blue' },
  { position: [0.5, 1, 2.5], key: ChessPieceNodeKey.Pawn, color: 'blue' },
  { position: [1.5, 1, 2.5], key: ChessPieceNodeKey.Pawn, color: 'blue' },
  { position: [2.5, 1, 2.5], key: ChessPieceNodeKey.Pawn, color: 'blue' },
  { position: [3.5, 1, 2.5], key: ChessPieceNodeKey.Pawn, color: 'blue' },
  { position: [-3.5, 1, 3.5], key: ChessPieceNodeKey.Rook, color: 'blue' },
  { position: [-1.5, 1, 3.5], key: ChessPieceNodeKey.Bishop, color: 'blue' },
  { position: [-0.5, 1, 3.5], key: ChessPieceNodeKey.King, color: 'blue' },
  { position: [0.5, 1, 3.5], key: ChessPieceNodeKey.Queen, color: 'blue' },
  { position: [1.5, 1, 3.5], key: ChessPieceNodeKey.Bishop, color: 'blue' },
  { position: [3.5, 1, 3.5], key: ChessPieceNodeKey.Rook, color: 'blue' },
  // Black player
  { position: [-3.5, 1, -2.5], key: ChessPieceNodeKey.Pawn, color: 'black' },
  { position: [-2.5, 1, -2.5], key: ChessPieceNodeKey.Pawn, color: 'black' },
  { position: [-1.5, 1, -2.5], key: ChessPieceNodeKey.Pawn, color: 'black' },
  { position: [-0.5, 1, -2.5], key: ChessPieceNodeKey.Pawn, color: 'black' },
  { position: [0.5, 1, -2.5], key: ChessPieceNodeKey.Pawn, color: 'black' },
  { position: [1.5, 1, -2.5], key: ChessPieceNodeKey.Pawn, color: 'black' },
  { position: [2.5, 1, -2.5], key: ChessPieceNodeKey.Pawn, color: 'black' },
  { position: [3.5, 1, -2.5], key: ChessPieceNodeKey.Pawn, color: 'black' },
  { position: [-3.5, 1, -3.5], key: ChessPieceNodeKey.Rook, color: 'black' },
  { position: [-1.5, 1, -3.5], key: ChessPieceNodeKey.Bishop, color: 'black' },
  { position: [-0.5, 1, -3.5], key: ChessPieceNodeKey.King, color: 'black' },
  { position: [0.5, 1, -3.5], key: ChessPieceNodeKey.Queen, color: 'black' },
  { position: [1.5, 1, -3.5], key: ChessPieceNodeKey.Bishop, color: 'black' },
  { position: [3.5, 1, -3.5], key: ChessPieceNodeKey.Rook, color: 'black' },
];
