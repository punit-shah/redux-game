import React from 'react';
import { shape, number } from 'prop-types';
import './FlyingObject.css';

const FlyingObject = ({ position }) => {
  const { x } = position;

  return (
    <g className="FlyingObject">
      <svg x={x}>
        <g>
          <path d="M29.8 8l-3.5 2A12 12 0 1 1 16 4V0a16 16 0 1 0 13.8 8z" />
        </g>
      </svg>
    </g>
  );
};

FlyingObject.propTypes = {
  position: shape({
    x: number.isRequired,
    y: number.isRequired,
  }).isRequired,
};

export default FlyingObject;
