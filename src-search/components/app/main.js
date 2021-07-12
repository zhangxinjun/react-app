import React, { Component } from "react"
import propTypes from "prop-types"
import PubSub from "pubsub-js";
import Axios from "axios";
export default class Main extends Component {

  state = {
    init: true,
    loading: false,
    users: null,
    errorMsg: null
  }
  static propTypes = {
    searchName: propTypes.string.isRequired
  }
  // 在组件挂载完成后就开始监听兄弟组件通信的事件
  componentDidMount () {

    PubSub.subscribe('searchName', (_, data) => {
      console.log('data', data);

    })
  }

  componentWillReceiveProps (nextProps) {
    const { searchName } = nextProps;
    this.setState({ init: false, loading: true })
    const url = `https://api.github.com/search/users?q=${searchName}`
    Axios.get(url)
      .then(res => {
        const result = res.data
        const users = result.items.map(item => {
          return {
            name: item.login,
            url: item.html_url,
            avatarUrl: item.avatar_url
          }
        })
        this.setState({ loading: false, users })
      })
      .catch(error => {
        this.setState({ loading: false, errorMsg: "出错了" })
      })
  }


  render () {
    const { init, loading, users, errorMsg } = this.state;
    if (init) {
      return <h2>请输入关键字搜索</h2>
    } else if (loading) {
      return <h2>正在搜索中</h2>
    } else if (errorMsg) {
      return <h2>{errorMsg}</h2>
    } else {
      return (
        <ul>
          {
            users.map((user, index) => {
              return (
                <li key={index}>
                  <a href={user.url}>
                    <img src={user.avatarUrl} alt="" />
                    <p>{user.name}</p>
                  </a>
                </li>
              )
            })
          }

        </ul>
      )
    }


  }
}