import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reduce from './reduce'

export default createStore(reduce, composeWithDevTools(applyMiddleware(thunk)))