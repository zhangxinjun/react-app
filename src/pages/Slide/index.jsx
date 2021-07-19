import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';
import * as Icon from '@ant-design/icons'
import { router } from '../../router/config'

const { SubMenu } = Menu;
const { Sider } = Layout;

//生成icon元素标签
const _iconConvert = (type) => React.createElement(Icon[type])

// 生成以及标签
const renderMenu = ({ title, path, icon }) => {
  return (
    <Menu.Item key={path} icon={_iconConvert(icon)}>
      <NavLink to={path}> {title}</NavLink>
    </Menu.Item>
  )
}
// 处理二级标签
const renderSubMnenu = ({ title, path, icon, children }) => {
  return (
    <SubMenu key={path} title={title} icon={_iconConvert(icon)}>
      {
        children && children.map(item => {
          return item.children && item.children.length > 0 ? renderSubMnenu(item) : renderMenu(item)
        })
      }
    </SubMenu>
  )

}


function Slide (props) {
  const [collapsed] = useState(false)
  const [openKeys, setOpenKeys] = useState([])
  const [selectKeys, setSelectKeys] = useState(['/home'])

  useEffect(() => {
    const r = props.location.pathname
    setSelectKeys([r])
  }, [props])

  const onOpenChange = (keys) => {
    console.log(keys);
    const k = keys
    setOpenKeys([])
    setOpenKeys(keys)
  }
  // const menuSelect = ({ item, key }) => { setDefauleKeys([key]) }

  return (
    <div>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '100%' }}>
        <div className="logo" style={{ color: '#fff', textAlign: 'center', height: '62px', lineHeight: '62px' }}>这是log</div>

        <Menu theme="dark" selectedKeys={selectKeys} defaultOpenKeys={openKeys} onOpenChange={onOpenChange} mode="inline" >
          {
            router.map(firstItem => {
              return firstItem.children && firstItem.children.length > 0 ? renderSubMnenu(firstItem) : renderMenu(firstItem)
            })
          }
        </Menu>
      </Sider>
    </div>
  )
}
export default withRouter(Slide)
