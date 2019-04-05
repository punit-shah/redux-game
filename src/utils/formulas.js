export const pathFromCubicBezierCurve = ({
  initialAxis,
  initialControlPoint,
  endingControlPoint,
  endingAxis,
}) =>
  `M ${initialAxis.x} ${initialAxis.y}
  c ${initialControlPoint.x} ${initialControlPoint.y}
  ${endingControlPoint.x} ${endingControlPoint.y}
  ${endingAxis.x} ${endingAxis.y}`.replace(/\n/g, '');

export const radiansToDegrees = radians => (radians * 180) / Math.PI;

export const calculateCannonAngle = (x1, y1, x2, y2) => {
  if (x2 >= 0 && y2 >= 0) {
    return 90;
  }
  if (x2 <= 0 && y2 >= 0) {
    return -90;
  }

  const radians = Math.atan((x2 - x1) / (y2 - y1));
  const degrees = radiansToDegrees(radians);
  return -degrees;
};

export const getCanvasPosition = event => {
  const svg = document.getElementById('canvas');
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;

  const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
  return { x, y };
}
