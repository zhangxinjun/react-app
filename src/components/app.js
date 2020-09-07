import React, { Component } from "react"
import { NavLink,Switch,Route,Redirect } from 'react-router-dom'

import About from "../views/about"
import Home from "../views/home"
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <NavLink className ="list-group-item" to="/about">About</NavLink>
                        <NavLink className ="list-group-item" to="/home">Home</NavLink>

                    </div>
                    <div className="col-xs-6">
                        <Switch>
                            <Route path="/about" component={About}></Route>
                            <Route path="/home" component={Home}></Route>
                            <Redirect to="/about"></Redirect>
                        </Switch>
                    </div>
                </div>
            </div >
        )
    }
}