import { SETUSERINFO } from '../action/actionType'

const ininState = { user: { name: '测试', age: 12 } }
export default function userRedux (preState = ininState, action) {
  const { type, data } = action
  switch (type) {
    case SETUSERINFO:
      return { ...data }
    default:
      return preState
  }
}