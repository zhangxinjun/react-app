import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Tag } from 'antd';
import { deleteCrumAction } from '../../redux/action/crumbAction'
import store from '../../redux/store'


class Crumbs extends Component {
  state = {
    tagList: []
  }
  componentDidMount () {
    const list = store.getState().crumbRedux
    console.log(list, 'list');
    this.setState({ tagList: list })
  }
  deleteTag = (item) => {
    return (e) => {
      e.preventDefault()
      // props.deleteCrumAction(item)
    }
  }
  render () {
    const { tagList } = this.state
    return (
      <div style={{ padding: '20px' }}>
        {
          tagList.map((el, index) => {
            return <Tag onClose={this.deleteTag(el)} closable key={index}><Link to={el}>{el}</Link></Tag>
          })
        }
      </div>
    )
  }
}
export default connect(state => ({ crumList: state }), { deleteCrumAction })(Crumbs)

