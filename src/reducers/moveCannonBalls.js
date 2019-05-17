import { calculateNextPosition } from '../utils/formulas';

const moveCannonBalls = cannonBalls =>
  cannonBalls
    .filter(({ position: { x, y } }) => y > -800 && x > -500 && x < 500)
    .map(cannonBall => {
      const {
        angle,
        position: { x, y },
      } = cannonBall;
      return {
        ...cannonBall,
        position: calculateNextPosition(x, y, angle, 5),
      };
    });

export default moveCannonBalls;
