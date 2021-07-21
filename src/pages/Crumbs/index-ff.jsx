import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Tag } from 'antd';
import { deleteCrumAction } from '../../redux/action/crumbAction'

import store from '../../redux/store'


function Crumbs (props) {
  const [tagList, setTagList] = useState([])
  useEffect(() => {
    console.log(store.getState());
    const list = store.getState().crumbRedux
    setTagList(list)
  }, [])

  const deleteTag = (item) => {
    return (e) => {
      e.preventDefault()
      props.deleteCrumAction(item)
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      {
        tagList.map((el, index) => {
          return <Tag onClose={deleteTag(el)} closable key={index}><Link to={el}>{el}</Link></Tag>
        })
      }
    </div>
  )
}
export default connect(state => ({ crumList: state }), { deleteCrumAction })(Crumbs)
