import { calculateCannonAngle } from '../utils/formulas';

const shoot = (state, action) => {
  const {
    mousePosition: { x, y },
  } = action;
  const { gameState } = state;
  const { started, cannonBalls } = gameState;

  if (!started) return state;

  if (cannonBalls.length >= 2) return state;

  const angle = calculateCannonAngle(0, 0, x, y);

  const id = new Date().getTime();
  const cannonBall = {
    position: { x: 0, y: 0 },
    angle,
    id,
  };

  return {
    ...state,
    gameState: {
      ...gameState,
      cannonBalls: [...cannonBalls, cannonBall],
    },
  };
};

export default shoot;
