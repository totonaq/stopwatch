import React, { Component } from 'react';
import ActualTime from './containers/ActualTime';
import ControlButtonsContainer from './containers/ControlButtonsContainer';
import RecordDataContainer from './containers/RecordDataContainer';
import './Stopwatch.css';

class Stopwatch extends Component {
  render() {
    return (
      <div className="App">
        <ActualTime />
        <ControlButtonsContainer />
        <RecordDataContainer />
      </div>
    );
  }
}


export default Stopwatch;
