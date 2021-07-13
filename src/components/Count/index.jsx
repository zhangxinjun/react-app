import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
  // 由于redux中数据的变化并不会引起页面的更新
  componentDidMount () {
    // 只要redux中的数据变化了就会执行subscribe函数
    store.subscribe(() => {
      this.setState({})
    })
  }
  add = () => {
    const { value } = this.selectValue
    // 点击的时候分发对应的action
    store.dispatch({ type: 'add', data: +value })
  }
  render () {
    return (
      <div>
        <h1>求的和是{store.getState()}</h1>
        <select ref={s => this.selectValue = s}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>+</button>
        <button>-</button>
        <button>奇数加</button>
      </div>
    )
  }
}
