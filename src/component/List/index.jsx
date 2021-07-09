import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Item from '../Item'

export default class List extends Component {
  static propTypes = {
    todoList: PropTypes.array.isRequired
  }
  render () {
    const { todoList, changeItemStatus, deletaTodo } = this.props
    return (
      <ul className="todo-main">
        {
          todoList.map(item => {
            // eslint-disable-next-line no-lone-blocks
            {/**将当前item传递给子组件  将接受到的改变父组件状态的方法传递给子组件*/ }
            return <Item key={item.id} {...item} changeItemStatus={changeItemStatus} deletaTodo={deletaTodo} />
          })
        }
      </ul>
    )
  }
}