import React from 'react';
import PropTypes from 'prop-types';

const TimeField = ({ h, m, s, ms }) => {
 
  return (
    <div className="time-field-wrap">
      <span className="hour">{h}</span>
      <span className="colon">:</span>
      <span className="min">{m}</span>
      <span className="colon">:</span>
      <span className="sec">{s}</span>
      <span className="ms">{ms}</span>
    </div>
  )
  
}

TimeField.propTypes = {
  h: PropTypes.string.isRequired,
  m: PropTypes.string.isRequired,
  s: PropTypes.string.isRequired,
  ms: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
}

export default TimeField