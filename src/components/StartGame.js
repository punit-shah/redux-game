import React from 'react';
import { func } from 'prop-types';

const StartGame = ({ onClick }) => (
  <g style={{ cursor: 'pointer' }} onClick={onClick}>
    <rect
      x={-window.innerWidth / 2}
      y={-window.innerHeight + 100}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ fill: 'transparent' }}
    />
    <text
      textAnchor="middle"
      x={0}
      y={-window.innerHeight / 2 + 100}
      style={{
        fontFamily: 'Consolas, monospace',
        fontSize: 60,
        fill: '#fff',
      }}
    >
      Tap to start
    </text>
  </g>
);

StartGame.propTypes = {
  onClick: func.isRequired,
};

export default StartGame;
