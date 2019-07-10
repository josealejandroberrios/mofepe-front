import React from 'react';
import PropTypes from 'prop-types';

import { formattedNamePeriod } from './utils';

const CustomXAxisTick = ({x, y, payload: { value }}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{formattedNamePeriod(value)}</text>
    </g>
  );
}

CustomXAxisTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.shape({
    value: PropTypes.number,
  }),
}

export default CustomXAxisTick;