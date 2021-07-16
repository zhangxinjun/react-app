import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './pages/Login'
import Layout from './pages/Layout/'


export default function App () {
  return (
    <div>
      <Switch>
        <Redirect exact from='/' to='/login'></Redirect>
        <Route path='/login' component={Login}></Route>
        <Route path='/home' component={Layout}></Route>
      </Switch>
    </div>
  )
}
