const startGame = (state, initialGameState) => ({
  ...state,
  gameState: {
    ...initialGameState,
    started: true,
  },
});

export default startGame;
