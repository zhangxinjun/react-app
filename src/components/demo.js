import React from 'react'
export default class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: 'sss' }
    this.demo = this.demo.bind(this)
  }
  demo () {
    console.log('---', this.state.name);
    this.setState({ name: '士大夫' })
  }
  // 字符串形式已经废弃
  inputVlue = () => {
    console.log(this.refs.input.value);
  }
  // 官方推荐使用回调函数形式
  input2Click = () => {
    console.log(this.input2.value);
  }
  // 将ref的回调函数已class绑定的形式写可以避免在组件更新的时候ref回调函数重复执行的问题
  input2refFunc = (current) => {
    this.input2 = current
  }
  render () {
    const { name, age } = this.props
    return (
      <div>
        <h1 onClick={this.demo}>demo{this.state.name}---{name}{age}</h1>

        <input ref="input" type="text"></input>
        <button onClick={this.inputVlue}>按钮</button>
        {/* 回调函数形式的ref如果采用内联函数的形式则在组件数据更新的时候render函数更新视图的时候ref的回调函数会被执行两次，首次执行的current为null第二次执行的时候才时正常的 */}
        {/* <input type="text" ref={current => this.input2 = current} /> */}

        <input type="text" ref={this.input2refFunc} />
        <button onClick={this.input2Click}>input2</button>
      </div>
    )
  }
}