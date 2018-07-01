import React from 'react';
import PropTypes from 'prop-types';

const ControlButtons = props => {

  const { 
    isPaused, 
    isStarted, 
    onStartPauseClick, 
    onRecordClearClick } = props;

  return (
  
    <div className="button-field-wrap">

      <button
        className="start"
        onClick={() => onStartPauseClick() }>
        {isPaused ? 'Start' : 'Pause'}
      </button>
      
      <button
        className="record"
        onClick={() => onRecordClearClick() }>
        {isStarted && isPaused ? 'Clear' : 'Split'}
      </button>

    </div>
  )
  
}

ControlButtons.propTypes = {
  isPaused: PropTypes.bool.isRequired,
  isStarted: PropTypes.bool.isRequired,
  onStartPauseClick: PropTypes.func.isRequired,
  onRecordClearClick: PropTypes.func.isRequired
}

export default ControlButtons
