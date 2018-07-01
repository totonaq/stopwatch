import React from 'react';
import PropTypes from 'prop-types';

const Record = ({ number, timePassed, recordTime }) => {
	return (
		<div className="record-field-wrap-data">
			<div className="number">{number}</div>
			<div className="timePassed">{timePassed}</div>
			<div className="recordTime">{recordTime}</div>
		</div>
	)
}

Record.propTypes = {
  number: PropTypes.number.isRequired,
  timePassed: PropTypes.string.isRequired,
  recordTime: PropTypes.string.isRequired
}

export default Record