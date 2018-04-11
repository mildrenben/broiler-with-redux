import { connect } from 'react-redux'
import HomeScreen from '../../components/HomeScreen'
import * as a from './actions'
import * as s from './selectors'

const mapStateToProps = state => ({
	counter: s.getCount(state)
})

const mapDispatchToProps = dispatch => ({
	changeCounter (change) {
		dispatch(a.changeCounter(change))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)