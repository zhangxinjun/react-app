import React, { Component } from 'react'
import store from './redux/store'
import 'antd/dist/antd.css';
// 引入容器组件并传递store
import Count from './container/CountUi'


export default class App extends Component {
  render () {
    return (

      <div>
        <Count store={store} />
      </div>
    )
  }
}
