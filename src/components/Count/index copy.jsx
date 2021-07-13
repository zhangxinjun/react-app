import React, { Component } from 'react'
import store from '../../redux/store'
import { addAction, addAsyncAction } from '../../redux/num_action'

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
    store.dispatch(addAction(+value))
  }
  addAsync = () => {
    const { value } = this.selectValue
    store.dispatch(addAsyncAction(+value, 1000))
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
        <button onClick={this.addAsync}>异步加</button>
        <button>奇数加</button>
      </div>
    )
  }
}
