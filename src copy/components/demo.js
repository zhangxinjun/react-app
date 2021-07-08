import React from 'react'
export default class Demo extends React.Component {
  state = {
    name: '',
    pwd: '',
    opticty: 1
  }
  // 返回一个函数交给onChange事件调用dataType是onChange传递过来的参数
  formDate = (dataType) => {
    // onChange事件在调用的时候会有一个event参数由react自动传递过来
    return (event) => {
      this.setState({ [dataType]: event.target.value })
    }
  }
  componentDidMount () {
    this.time = setInterval(() => {
      let { opticty } = this.state
      opticty -= 0.1
      if (opticty < 0) {
        opticty = 1
      }
      this.setState({ opticty })
    }, 200)
  }
  unmoun = () => {
    clearInterval(this.time)
  }
  render () {
    const { name, pwd, opticty } = this.state
    console.log("+++");
    return (
      <div>
        <h1 style={{ opacity: opticty }}>标题</h1>
        <form>
          {/* onChange事件接受的是formDate函数的返回值 */}
          <input type="text" onChange={this.formDate('name')} />
          <br />
          <input type="text" onChange={this.formDate('pwd')} />
        </form>
        <div>输入的用户名：{name}密码：{pwd}</div>
        <button onClick={this.unmoun}>卸载</button>
      </div>
    )
  }
}