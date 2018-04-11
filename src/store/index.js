import { createStore, combineReducers } from 'redux'
import counterReducer from '../containers/Home/reducer'

const store = createStore(combineReducers({
	counter: counterReducer
}))

export default store