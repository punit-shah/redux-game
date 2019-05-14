import { calculateCannonAngle } from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';

const moveObjects = (state, action) => {
  const mousePosition = action.mousePosition || { x: 0, y: 0 };

  const newState = createFlyingObjects(state);

  const { x, y } = mousePosition;
  const angle = calculateCannonAngle(0, 0, x, y);

  return {
    ...newState,
    angle,
  };
};

export default moveObjects;
