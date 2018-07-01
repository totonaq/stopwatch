const initialState = {
	isStarted: false,
	isPaused: true,
	h: '00',
	m: '00',
	s: '00',
	ms: '000'
}

const timerControls = (state = initialState, action) => {
	switch (action.type) {
		case 'START_TIMER':
			return Object.assign({}, state, {
				isStarted: true,
				isPaused: false
			})
			
		case 'UPDATE_TIMER':
			return Object.assign({}, state, {
				h: action.h,
				m: action.m,
				s: action.s,
				ms: action.ms
			})

		case 'PAUSE_TIMER':
			return Object.assign({}, state, {
				isPaused: true
			})

		case 'CLEAR_TIMER':
			return Object.assign({}, state, initialState)
		default:
			return state

	}
}

export default timerControls