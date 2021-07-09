import React, { Component } from 'react'

export default class Footer extends Component {
  allChange = (event) => {
    this.props.todoAllChange(event.target.checked)
  }
  deleteAll = () => {
    this.props.deleteAllChenked()
  }
  render () {
    const { todoList } = this.props
    const total = todoList.length
    const checkedNum = todoList.reduce((pre, cur) => {
      return pre + (cur.status ? 1 : 0)
    }, 0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={(checkedNum === total && total)} onChange={this.allChange} />
        </label>
        <span>
          <span>已完成{checkedNum}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.deleteAll}>清除已完成任务</button>
      </div>
    )
  }
}
