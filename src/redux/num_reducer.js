/**
 * 1.创建一个为count组件服务的reducer函数
 * 2.该函数会接受两个参数分别是：之前的状态 preState，动作对象action 
 */
const initState = 0
export default function countReducer (preState = initState, action) {
  console.log('--', preState);

  // 从action中结构出来type，data
  const { type, data } = action
  // 根据type不同执行不同的操作
  switch (type) {
    case 'add':
      return preState + data
    case 'deince':
      return preState - data
    default:
      return preState
  }
}
// const initialState = {

// }

// export default (state = initialState, { type, payload }) => {
//   switch (type) {

//   case typeName:
//     return { ...state, ...payload }

//   default:
//     return state
//   }
// }
