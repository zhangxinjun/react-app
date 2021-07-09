import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

// React.StrictMode检查其中的所有组件的书写是否合理，是否使用了一些不推荐的API
ReactDom.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'))
