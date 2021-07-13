import React, { Component } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Home from './components/Home/index'
import About from './components/About/index'

export default class App extends Component {
  render () {
    return (

      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* activeClassName当前激活的路由的class name，默认class时是active */}
              <NavLink activeClassName="active-name" className="list-group" to="/about">about</NavLink>
              <NavLink activeClassName="active-name" className="list-group" to="/home">home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              {/* 指定路径并注册路由, Switch作用是在匹配到路由时就停止继续查找，提到效率，否则会将所有路由都查找一边, exact是否开启路由的严格匹配默认使用的是模糊匹配 */}
              <Switch>

                <Route path="/about" component={About}></Route>
                <Route path="/home" component={Home}></Route>
                {/* Redirect重定向，在所有路由的最下方 */}
                <Redirect to="/home/news" />
              </Switch>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
