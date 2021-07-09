import React, { Component } from 'react'

export default class Item extends Component {
  state = { flag: false }
  // 判断当前鼠标是否进入
  mousePlace = (flag) => {
    return () => {
      this.setState({ flag })
    }
  }
  // 是否选中改变时更新父组件的状态
  statusChange = (id) => {
    return (event) => {
      this.props.changeItemStatus(id, event.target.checked)
    }
  }
  deleteItem = (id) => {
    return () => {
      if (window.confirm()) {
        this.props.deletaTodo(id)
      }
    }
  }
  render () {
    const { flag } = this.state
    const { id, name, status } = this.props
    return (
      <li onMouseEnter={this.mousePlace(true)} onMouseLeave={this.mousePlace(false)} style={{ background: flag ? '#ccc' : '#fff' }}>
        <label>
          <input type="checkbox" checked={status} onChange={this.statusChange(id)} />
          <span>{name}</span>
        </label>
        <button onClick={this.deleteItem(id)} className="btn btn-danger" style={{ display: flag ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
