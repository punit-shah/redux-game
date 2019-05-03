import React from 'react';
import { number } from 'prop-types';

const CurrentScore = ({ score }) => (
  <g>
    <text
      style={{ fontFamily: 'Consolas, monospace', fontSize: 30, fill: '#fff' }}
      x={-window.innerWidth / 2 + 20}
      y={60}
    >
      {score}
    </text>
  </g>
);

CurrentScore.propTypes = {
  score: number.isRequired,
};

export default CurrentScore;
