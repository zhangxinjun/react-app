import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// 所有的路由都必须包裹在BrowserRouter下做统一管理
ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
