import React, { Component } from 'react'

export default class Detail extends Component {
  render () {
    // 由此可以接受到由params传递的路由组件参数
    console.log(this.props.match.params);
    return (
      <div>
        ss
      </div>
    )
  }
}
