import { connect } from 'react-redux'

import { 
	startTimer, 
	updateTime, 
	pauseTimer, 
	clearTimer, 
	addRecord } from '../actions'

import ControlButtons from '../components/ControlButtons'
import { store } from '../index'

let startTime;
let timePassed = [];
let actualTime;
let recordTime = 0;

const onStartPauseClick = () => {
	if (store.getState().timerControls.isPaused) {

		getTime();
  		store.dispatch(startTimer());

	} else {

		timePassed.push(new Date() - startTime);
		store.dispatch(pauseTimer());

	}
}

const onRecordClearClick = () => {

	const { isPaused, isStarted, h, m, s, ms } = store.getState().timerControls;

	if (isPaused && isStarted) {

		store.dispatch(clearTimer())

		timePassed = [];
		recordTime = 0;

	} else if (!isPaused && isStarted) {

		addNewRecord(h, m, s, ms)

	}
}

const getTime = () => {

	startTime = new Date();
	
	let initialTime = timePassed.reduce((a, b) => {
		return a + b
	}, 0)

	window.requestAnimationFrame(function run() {
	 	
	 	let currentTime = new Date(); 

	 	actualTime = currentTime - startTime + initialTime;

	 	let t = getHmsms(actualTime);

		store.dispatch(updateTime(t.h, t.m, t.s, t.ms))

		if (store.getState().timerControls.isStarted && 
	      !store.getState().timerControls.isPaused) {
			
			window.requestAnimationFrame(run)
		}
	})
}

const getHmsms = (time) => {
	return {
		ms: addZero((time % 1000), true),
		s: addZero(Math.floor(time / 1000) % 60),
		m: addZero(Math.floor(time / 60000) % 60),
		h: addZero(Math.floor(time / 3600000) % 60) 
	}
}

const addZero = (value, double) => {

	value = Number(value);

	if (double) {
		if (value < 100 && value > 9) {
		  	value = '0' + value;
		} else if (value < 10) {
		  	value = '00' + value;
		} else {
		  	return value;
		}
	} else {
		value = value < 10 ? '0' + value : value;
	}

	return value;
}

const addNewRecord = (h, m, s, ms) => {
	recordTime = actualTime - recordTime;

	let diff = getHmsms(recordTime);

	let record = {
		recordTime: `${diff.h}:${diff.m}:${diff.s}.${diff.ms}`,
		timePassed: `${h}:${m}:${s}.${ms}`
	}

	recordTime = actualTime;

	store.dispatch(addRecord(record))
}




const mapStateToProps = (state) => {
	return {
		isPaused: state.timerControls.isPaused,
		isStarted: state.timerControls.isStarted
	}
}

const mapDispatchToProps = () => {
	return {
		onStartPauseClick,
		onRecordClearClick
	 }
}

const ControlButtonsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlButtons)

export default ControlButtonsContainer