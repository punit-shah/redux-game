import { calculateCannonAngle } from "../utils/formulas";

const moveObjects = (state, { mousePosition }) => {
  if (!mousePosition) return state;

  const { x, y } = mousePosition;
  const angle = calculateCannonAngle(0, 0, x, y);

  return {
    ...state,
    angle,
  };
}

export default moveObjects;
