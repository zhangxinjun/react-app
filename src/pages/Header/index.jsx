import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd';
import './index.css'

const { Header } = Layout;

function LayHeader (props) {
  const [user, setUser] = useState({})
  useEffect(() => {
    const { user } = props.userInfo.userRedux
    setUser(user)
  }, [props])

  return (
    <div>
      <Header className="header">
        <div>{user.name}</div>
      </Header>
    </div>
  )
}
export default connect(state => ({ userInfo: state }))(LayHeader)
