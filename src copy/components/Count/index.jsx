import React, { Component } from 'react'

export default class Count extends Component {

  add = () => {
    const { value } = this.selectValue
    // 该方法就是mapDispatchToProps传递过来的方法
    console.log(this.props);
    this.props.mapAdd(+value)
  }
  addAsync = () => {
    const { value } = this.selectValue
  }
  render () {
    return (
      <div>
        <h1>求的和是{this.props.count}</h1>
        <select ref={s => this.selectValue = s}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.addAsync}>异步加</button>
        <button>奇数加</button>
      </div>
    )
  }
}
