// 这种引入方式不是解构赋值，而是说明在react文件中有默认导出的React同时还有分别导出的Component
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 引入生成随机id的库
import { nanoid } from 'nanoid'

export default class Header extends Component {
  static propTypes = {
    addList: PropTypes.func.isRequired
  }
  addItem = (event) => {
    const { value } = event.target
    // 监听点击的键盘是否是回车键
    if (event.keyCode !== 13) return
    if (value.trim() === '') {
      alert('输入不能为空')
      return
    } else {
      // 子组件中在合适的时候调用父组件传递过来的改变父组件数据的方法，并将要改变的数据传递过去
      const itemObj = { id: nanoid(), name: value, status: false }
      this.props.addList(itemObj)
    }
    event.target.value = ''
  }
  render () {
    return (
      <div className="todo-header">
        <input onKeyUp={this.addItem} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}