import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PubSub from 'pubsub-js';
import { Tag } from 'antd';
import { deleteCrumAction } from '../../redux/action/crumbAction'


function Crumbs (props) {
  const [tagList, setTagList] = useState([])
  useEffect(() => {
    PubSub.subscribe('selsectList', (msg, data) => {
      setTagList(data)
    })
    // const tagList = props.crumList.crumbRedux
    // setTagList([...tagList])
    const list = JSON.parse(sessionStorage.getItem('selsectList')) || []
    setTagList(list)
  }, [])

  const deleteTag = (item) => {
    return (e) => {
      // e.preventDefault()
      // props.deleteCrumAction(item)
      // const tagList = props.crumList.crumbRedux
      // setTagList([...tagList])
      const index = tagList.findIndex(el => el.path === item.path)
      tagList.splice(index, 1)
      setTagList(tagList)
      sessionStorage.setItem('selsectList', JSON.stringify(tagList))

    }
  }
  return (
    <div style={{ padding: '20px' }}>
      {
        tagList.map((el, index) => {
          return <Tag onClose={deleteTag(el)} closable key={index}><Link to={el.path}>{el.title}</Link></Tag>
        })
      }
    </div>
  )

}
export default connect(state => ({ crumList: state }), { deleteCrumAction })(Crumbs)

