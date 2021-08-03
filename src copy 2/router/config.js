export const router = [
  {
    path: '/home',
    name: 'Home',
    title: '首页',
    icon: 'AppstoreOutlined',
    component: () => import('../pages/Home/index')
  },
  {
    path: '/about',
    name: 'About',
    title: '关于',
    icon: 'MailOutlined',
    component: () => import('../pages/About/index')
  },
  {
    path: '/system/user',
    name: 'System',
    title: '系统设置',
    icon: 'SettingOutlined',
    redirect: '/system/user',
    component: () => import('../pages/System/User/index'),
    children: [
      {
        path: '/system/user',
        name: 'User',
        title: '人员管理',
        icon: 'SettingOutlined',
        component: () => import('../pages/System/User/index')
      },
      {
        path: '/system/role',
        name: 'Role',
        title: '角色管理',
        icon: 'SettingOutlined',
        component: () => import('../pages/System/Role/index')
      },

    ]
  },
  {
    path: '/order/list',
    name: 'Order',
    title: '订单管理',
    icon: 'SettingOutlined',
    redirect: '/order/list',
    component: () => import('../pages/Order/List'),
    children: [
      {
        path: '/order/list',
        name: 'Order',
        title: '人员管理',
        icon: 'SettingOutlined',
        component: () => import('../pages/Order/List')
      },
      {
        path: '/order/detail',
        name: 'Detail',
        title: '角色管理',
        icon: 'SettingOutlined',
        component: () => import('../pages/Order/Detail')
      },

    ]
  }
]