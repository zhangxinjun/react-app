import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Layout, Menu } from 'antd';
import * as Icon from '@ant-design/icons'
import { router } from '../../router/config'
const { SubMenu } = Menu;
const { Sider } = Layout;

const _iconConvert = (type) => React.createElement(Icon[type])

export default function Slide (props) {
  const [collapsed, setCollapsed] = useState(false)
  let history = useHistory();

  const patchChange = (path) => {
    return () => {
      history.push(path)
    }
  }
  return (
    <div>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '100%' }}>
        <div className="logo" style={{ color: '#fff', textAlign: 'center', height: '62px', lineHeight: '62px' }}>这是log</div>
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
          {
            router.map((el, index) => {
              if (el.children && el.children.length > 0) {
                // <SubMenu key={i} title={el.title}>
                // el.children.map((c, i) => {
                //   return <Menu.Item key={i}>{c.title}</Menu.Item>
                // })
                // </SubMenu>
              } else {
                return <Menu.Item onClick={patchChange(el.path)} icon={_iconConvert(el.icon)} key={index}>{el.title}</Menu.Item>
              }
            })
          }
        </Menu>
      </Sider>
    </div>
  )
}
