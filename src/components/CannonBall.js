import React from 'react';
import { shape, number } from 'prop-types';

const CannonBall = ({ position }) => (
  <ellipse
    style={{ fill: '#f54997', stroke: '#d52977', strokeWidth: '2px' }}
    cx={position.x}
    cy={position.y}
    rx={16}
    ry={16}
  />
);

CannonBall.propTypes = {
  position: shape({
    x: number.isRequired,
    y: number.isRequired,
  }).isRequired,
};

export default CannonBall;
