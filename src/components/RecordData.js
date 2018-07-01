import React from 'react';
import Record from './Record';
import PropTypes from 'prop-types';

const RecordData = ({ records }) => {
  const reverse = records.sort(function(a, b) {
    return b.id - a.id
  })
 
  return (
    <div className="record-field-wrap">
      <div className="record-field-wrap-headings">
        <div>Record</div>
        <div>Time passed</div>
        <div>Record time</div>
      </div>
     
      {reverse.length > 0 && reverse.map((record, index) => 
        <Record 
          key={record.id}
          number={reverse.length - index}
          timePassed={record.timePassed}
          recordTime={record.recordTime}
        />
      )}
     
    </div>
  )
  
}

RecordData.propTypes = {
  records: PropTypes.array.isRequired
}

export default RecordData