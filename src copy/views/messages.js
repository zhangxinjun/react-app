import React, { Component } from 'react'

import MessageDetail from "./message-detail"
import { NavLink, Switch, Route } from "react-router-dom"
export default class Message extends Component {
    state = {
        messages: []
    }

    componentDidMount() {
        setTimeout(() => {
            const messages = [
                { id: 1, title: "messages1" },
                { id: 2, title: "messages2" },
                { id: 3, title: "messages3" }
            ];
            this.setState({ messages })
        }, 1000)
    }

    showDetial =(id) => {
        this.props.history.push(`/home/message/${id}`)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((item, index) => (
                            <li key={index}>
                                <NavLink to={`/home/message/${item.id}`}>{item.title}</NavLink>
                                <button onClick={() => {this.showDetial(item.id)}}>push查看</button>
                            </li>
                        ))
                    }

                </ul>
                <Route path="/home/message/:id" component={MessageDetail}></Route>

            </div>

        )
    }
}