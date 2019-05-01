const BlackHorseChessEngine = require('black-horse');

module.exports = class Game {
  constructor() {
    this.state = {
      currentPlayer: 0,
      board: [],
      targetPiece: {
        location: [],
        validMoves: []
      },
      //[{*white*} {*black*}]
      castle: [{ kingSide: true, queenSide: true },
      { kingSide: true, queenSide: true }],
      kingPosition: [[4, 7], [4, 0]],
      enPassant: false,
      fiftyMoveCounter: 0,
      fullmoveCounter: 0,
      fenString: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 0'
    };
    this.setState = this.setState.bind(this);
    this.getCurrentBoard = this.getCurrentBoard.bind(this);
    this.getAvailableMoves = this.getAvailableMoves.bind(this);
    this.movePiece = this.movePiece.bind(this);
  }

  setState(state) {
    this.state = state;
  }

  getCurrentBoard() {
    if (this.state.board.length === 0) {
      const board = BlackHorseChessEngine.initBoard();
      this.setState({ ...state, board });
    }
  }

  getAvailableMoves() {

  }

  movePiece() {

  }
}
