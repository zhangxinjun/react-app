import React from 'react'
export default class Demo extends React.Component {
  state = {
    name: '',
    pwd: ''
  }
  // 返回一个函数交给onChange事件调用dataType是onChange传递过来的参数
  formDate = (dataType) => {
    // onChange事件在调用的时候会有一个event参数由react自动传递过来
    return (event) => {
      this.setState({ [dataType]: event.target.value })
    }
  }
  render () {
    const { name, pwd } = this.state
    return (
      <div>
        <form>
          {/* onChange事件接受的是formDate函数的返回值 */}
          <input type="text" onChange={this.formDate('name')} />
          <br />
          <input type="text" onChange={this.formDate('pwd')} />
        </form>
        <div>输入的用户名：{name}密码：{pwd}</div>
      </div>
    )
  }
}