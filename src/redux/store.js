import { createStore, applyMiddleware } from 'redux'
// 异步action需要中间件支持
import thunk from 'redux-thunk'
import countReducer from './num_reducer'

export default createStore(countReducer, applyMiddleware(thunk))