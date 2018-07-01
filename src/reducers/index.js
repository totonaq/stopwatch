import { combineReducers } from 'redux'
import records from './records'
import timerControls from './timerControls'

const StopwatchApp = combineReducers({
  records,
  timerControls
})

export default StopwatchApp