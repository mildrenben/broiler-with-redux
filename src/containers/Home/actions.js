export const changeCounter = (change) => {
	return {
		type: change === 1
			? 'INCREMENT_COUNTER'
			: 'DECREMENT_COUNTER'
	}
}