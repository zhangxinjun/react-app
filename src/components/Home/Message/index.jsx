import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    message: [
      { id: 1, title: 'sss' },
      { id: 2, title: 'aaa' },
      { id: 3, title: 'fff' }
    ]
  }
  render () {
    const { message } = this.state
    return (
      <ul>
        {message.map(item => {
          // 路由组件传递params参数
          // return <li key={item.id}> <Link to={`/home/message/detail/${item.id}/${item.title}`} >{item.title}</Link></li>
          // 路由传参search传参
          return <li key={item.id}> <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`} >{item.title}</Link></li>
        })}
        <hr />
        {/* 上边传的那些这个位置必须指定 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}


        {/* search传参不需要指定，正常注册路由即可 */}
        <Route path="/home/message/detail" component={Detail}></Route>

      </ul>
    )
  }
}
