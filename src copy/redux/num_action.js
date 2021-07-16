// action的返回如果是object那么就是同步action
export const addAction = data => ({ type: 'add', data })
// action的返回值如果是函数那么就是异步action
export const addAsyncAction = (data, timer) => {
  // 以部action是交有store执行的所以默认可以接收到dispatch
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addAction(data))
    }, timer)
  }
}
