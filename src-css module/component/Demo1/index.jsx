// 这种引入方式不是解构赋值，而是说明在react文件中有默认导出的React同时还有分别导出的Component
import React, { Component } from 'react'
// css样式的模块化，防止多个组件之间相同类名互相干扰
import demo1 from './index.module.css'

export default class Demo1 extends Component {
  render () {
    return (
      <div className={demo1.title}>Demo1</div>
    )
  }
}