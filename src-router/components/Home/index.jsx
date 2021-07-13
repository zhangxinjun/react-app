import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render () {
    return (
      <div>
        <div>home</div>
        <NavLink to="/home/news">news</NavLink>
        <NavLink to="/home/message">meaasge</NavLink>
        <hr />
        <Route path="/home/news" component={News}></Route>
        <Route path="/home/message" component={Message}></Route>
      </div>
    )
  }
}
