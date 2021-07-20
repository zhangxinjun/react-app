import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd';
import * as Icon from '@ant-design/icons'
import { router } from '../../router/config'
import { crumbAction } from '../../redux/action/crumbAction'
// import filterRouterItem from './routeFilter';

const { SubMenu } = Menu;
const { Sider } = Layout;

//生成icon元素标签
const _iconConvert = (type) => React.createElement(Icon[type])

// 生成一级标签
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
    const a = router.filter(el => {
      if (el.path === r) {
        return el.path
      }
    })
    // const a = filterRouterItem(router, r)
    // // console.log(a, '============');
    setOpenKeys(a)
    props.addCrumb(r)
  }, [props])


  const rootSubmenuKeys = router.filter(el => {
    return el.children && el.children.length > 0
  }).map((item => {
    return item.path
  }))


  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onSelectMenu = ({ key }) => {
    // const routerItem = filterRouterItem(router, key)
    // console.log(routerItem, '00000');
    props.addCrumb(key)
  }

  return (
    <div>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '100%' }}>
        <div className="logo" style={{ color: '#fff', textAlign: 'center', height: '62px', lineHeight: '62px' }}>这是log</div>

        <Menu theme="dark" selectedKeys={selectKeys} openKeys={openKeys} onOpenChange={onOpenChange} onSelect={onSelectMenu} mode="inline" >
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


export default connect(state => ({ crumList: state }), { addCrumb: crumbAction })(withRouter(Slide))
