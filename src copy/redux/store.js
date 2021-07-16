import { createStore, applyMiddleware, combineReducers } from 'redux'
// 异步action需要中间件支持
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import countReducer from './num_reducer'

export default createStore(countReducer, composeWithDevTools(applyMiddleware(thunk)))