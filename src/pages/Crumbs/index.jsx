import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Tag } from 'antd';
import { deleteCrumAction } from '../../redux/action/crumbAction'


function Crumbs (props) {
  const [tagList, setTagList] = useState([])
  useEffect(() => {
    const list = props.crumList.crumbRedux
    console.log(list, '这是list');
    setTagList(list)
  }, [props])

  const deleteTag = (item) => {
    return () => {
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
