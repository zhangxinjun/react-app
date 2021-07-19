import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './pages/Login'
import Layout from './pages/Layout/'

function loginLayout () {
  const userLogin = sessionStorage.getItem('user')
  if (userLogin) {
    return <Route path='/home' component={Layout}></Route>
  } else {
    return <div><Redirect exact from='/' to='/login'></Redirect> <Route path='/login' component={Login}></Route></div>
  }
}
export default function App () {
  return (
    <div>
      <Layout></Layout>
      {/* <Switch>
        {
          loginLayout()
        }
      </Switch> */}
    </div>
  )
}
