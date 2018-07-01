const addRecord = (state, action) => {
	switch (action.type) {
		case 'ADD_RECORD':
			return {
				id: action.id,
				timePassed: action.timePassed,
				recordTime: action.recordTime
			}
		default:
			return state
	}
}

const records = (state = [], action) => {
	switch (action.type) {
		case 'ADD_RECORD':
			return [
				...state,
				addRecord(undefined, action)
			]
		case 'CLEAR_TIMER':
			return []
		default:
			return state
	}
}

export default records