import React from 'react'
import PropTypes from 'prop-types'

const HomeScreen = ({ counter, changeCounter }) => (
	<main>
		<span>{counter}</span>
		<button onClick={() => changeCounter(-1)}>-</button>
		<button onClick={() => changeCounter(1)}>+</button>
	</main>
)

HomeScreen.propTypes = {
	counter: PropTypes.number.isRequired,
	changeCounter: PropTypes.func.isRequired,
}

export default HomeScreen
