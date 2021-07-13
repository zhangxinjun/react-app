import { createStore } from 'redux'
import countReducer from './num_reducer'

export default createStore(countReducer)