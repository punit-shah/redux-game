import React from 'react';
import { number } from 'prop-types';

const CurrentScore = ({ score }) => (
  <g filter="url(#shadow)">
    <defs>
      <filter id="shadow">
        <feDropShadow dx={1} dy={1} stdDeviation={5} />
      </filter>
    </defs>
    <text
      style={{ fontFamily: 'Consolas, monospace', fontSize: 30, fill: '#fff' }}
      x={-window.innerWidth / 2 + 20}
      y={80}
    >
      {score}
    </text>
  </g>
);

CurrentScore.propTypes = {
  score: number.isRequired,
};

export default CurrentScore;
