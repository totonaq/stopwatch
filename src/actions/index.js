let nextRecord = 1;

export const startTimer = () => {
	return {
		type: 'START_TIMER'
	}
}

export const updateTime = (h, m, s, ms) => {
	return {
		type: 'UPDATE_TIMER',
		h,
		m,
		s,
		ms
	}
}

export const pauseTimer = () => {
	return {
		type: 'PAUSE_TIMER'
	}
}

export const clearTimer = () => {
	return {
		type: 'CLEAR_TIMER'
	}
}

export const addRecord = (record) => {
	return {
		type: 'ADD_RECORD',
		id: nextRecord++,
		timePassed: record.timePassed,
		recordTime: record.recordTime
	}
}