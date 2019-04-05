import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';

const Canvas = ({ angle, trackMouse }) => {
  const viewBox = [
    -(window.innerWidth / 2),
    -window.innerHeight + 100,
    window.innerWidth,
    window.innerHeight,
  ];
  return (
    <svg
      id="canvas"
      preserveAspectRatio="xMaxYMax"
      viewBox={viewBox}
      onMouseMove={trackMouse}
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={angle} />
      <CannonBase />
    </svg>
  );
};

export default Canvas;
