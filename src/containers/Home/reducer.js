const initialState = 0

function counterReducer (state = initialState, action) {
	const { payload:p, type } = action
	switch(type) {
	case 'INCREMENT_COUNTER': {
		return state + 1
	}
	case 'DECREMENT_COUNTER': {
		return state - 1
	}
	default: {
		return state
	}
	}
}

export default counterReducer