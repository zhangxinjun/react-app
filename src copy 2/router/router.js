import React, { Component, Suspense, lazy } from 'react'
import { router } from './config'
// import NotFound from '../pages/404'
import { Switch, Route } from 'react-router-dom'
export default class Router extends Component {
  render () {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {/* 导入相关路由配置 */}
          {
            router.map((item, index) => { return <Route exact={item.exact} key={index} path={item.path} component={lazy(item.component)} /> })
          }
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Suspense>

    )
  }
}