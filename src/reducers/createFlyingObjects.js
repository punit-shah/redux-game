import {
  maxFlyingObjects,
  createInterval,
  flyingObjectsStartPositionsX,
  flyingObjectsStartPositionY,
} from '../utils/constants';

const createFlyingObjects = state => {
  const { gameState } = state;
  const { started, lastObjectCreatedAt, flyingObjects } = gameState;

  if (!started) return state;

  const now = new Date().getTime();
  const shouldCreateNewObject =
    now - lastObjectCreatedAt > createInterval &&
    flyingObjects.length < maxFlyingObjects;

  if (!shouldCreateNewObject) return state;

  const id = new Date().getTime();
  const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);
  const newFlyingObject = {
    position: {
      x: flyingObjectsStartPositionsX[predefinedPosition],
      y: flyingObjectsStartPositionY,
    },
    createdAt: new Date().getTime(),
    id,
  };

  return {
    ...state,
    gameState: {
      ...gameState,
      flyingObjects: [...flyingObjects, newFlyingObject],
      lastObjectCreatedAt: new Date().getTime(),
    },
  };
};

export default createFlyingObjects;
