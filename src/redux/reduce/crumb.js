import { ADDCRUMB, DELETECRUMB } from '../action/actionType'
const initState = []
export default function crumbRedux (preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADDCRUMB:
      if (preState.indexOf(data) === -1) {
        return preState.concat([data])
      } else {
        return preState
      }
    case DELETECRUMB:
      preState.splice(preState.indexOf(data), 1)
      console.log('pre', preState);

      return preState
    default:
      return preState
  }
}