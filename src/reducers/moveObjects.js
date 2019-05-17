import { calculateCannonAngle } from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
import moveCannonBalls from './moveCannonBalls';

const moveObjects = (state, action) => {
  const { gameState } = state;

  if (!gameState.started) return state;

  const cannonBalls = moveCannonBalls(gameState.cannonBalls);

  const mousePosition = action.mousePosition || { x: 0, y: 0 };

  const newState = createFlyingObjects(state);

  const now = new Date().getTime();
  const flyingObjects = newState.gameState.flyingObjects.filter(
    ({ createdAt }) => now - createdAt < 4000
  );

  const { x, y } = mousePosition;
  const angle = calculateCannonAngle(0, 0, x, y);

  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      flyingObjects,
      cannonBalls,
    },
    angle,
  };
};

export default moveObjects;
