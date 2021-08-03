import { combineReducers } from 'redux'
import crumbRedux from './crumb'
import userRedux from './user'

export default combineReducers({
  crumbRedux,
  userRedux
})