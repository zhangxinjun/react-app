import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import { router } from '../../router/config'

import Header from '../Header'
import Slide from '../Slide'
import Crumbs from '../Crumbs'
import Error from '../Error'
const { Content } = Layout;



export default function App () {
  return (
    <div>

      <Layout style={{ height: '100vh' }}>
        <Slide />
        <Layout>
          <Header />
          <Crumbs />
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Suspense fallback={<div>loading...</div>}>
              <Switch>
                {
                  router.map((el, index) => <Route key={index} path={el.path} component={lazy(el.component)} ></Route>)
                }
                {/* <Route path="/error" component={Error}></Route>
                <Redirect to='/error'></Redirect> */}
              </Switch>
            </Suspense>

          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
