import React, { Component } from "react"
import PropTypes from "prop-types"
import PubSub from "pubsub-js"


export default class Search extends Component {

  static propTypes = {
    setSearchName: PropTypes.func.isRequired
  }
  search = () => {
    // 兄弟组件通信将当前的数据传递出去
    PubSub.publish('searchName', this.input.value)
    const searchName = this.input.value.trim()
    if (searchName) {
      this.props.setSearchName(searchName)
    }
  }
  render () {
    return (
      <div>
        <input type="text" ref={input => this.input = input} />
        <button onClick={this.search}>搜索</button>
      </div>
    )
  }
}