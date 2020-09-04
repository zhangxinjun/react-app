import React, { Component } from "react";

import Main from "./main"
import Search from "./search"
export default class App extends Component {

    state ={
        searchName : ""
    }

    setSearchName = (searchName) => {
        this.setState({searchName})
    }
    render() {
        return (
            <div>
                <p>搜索</p>
                <div>
                    <Search setSearchName={this.setSearchName}></Search>
                    <Main searchName={this.state.searchName}></Main>

                </div>
            </div>
        )
    }
}