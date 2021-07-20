import { ADDCRUMB, DELETECRUMB } from '../action/actionType'
const initState = []
export default function crumbRedux (preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADDCRUMB:
      if (preState.indexOf(data) === -1) {
        const cruState = preState.concat([data])
        return cruState
      } else {
        return preState
      }
    case DELETECRUMB:
      const curState = preState
      curState.splice(preState.indexOf(data), 1)
      return curState
    default:
      return preState
  }
}