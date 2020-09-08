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

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((item, index) => (
                            <li key={index}>
                                <a href={`/home/message/${item.id}`}>{item.title}</a>
                            </li>
                        ))
                    }

                </ul>
                <Route path="/home/message/:id" component={MessageDetail}></Route>

            </div>

        )
    }
}