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
  inputVlue = () => {
    console.log(this.refs.input.value);
  }
  render () {
    const { name, age } = this.props
    return (
      <div>
        <h1 onClick={this.demo}>demo{this.state.name}---{name}{age}</h1>
        <input ref="input" type="text"></input>
        <button onClick={this.inputVlue}>按钮</button>
      </div>
    )
  }
}