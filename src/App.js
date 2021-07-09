import React from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'
export default class App extends React.Component {
  state = {
    todoList: [{ id: 1, name: '订单', status: true }, { id: 2, name: '是否', status: false }, { id: 3, name: '滚动', status: true }]
  }
  // 声明修改父组件数据的方法并将其传递给子组件
  addList = (itemObj) => {
    const { todoList } = this.state
    const newTodoList = [itemObj, ...todoList]
    this.setState({ todoList: newTodoList })

  }
  changeItemStatus = (id, status) => {
    const { todoList } = this.state
    const newTodoList = todoList.map(item => {
      if (item.id === id) {
        // 将item解构的同时修改item的指定属性的值
        const newItem = { ...item, status }
        return newItem
      } else {
        return item
      }
    })
    this.setState({ todoList: newTodoList })
  }
  deletaTodo = (id) => {
    const { todoList } = this.state
    const newTodoList = todoList.filter(item => {
      return item.id !== id
    })
    this.setState({ todoList: newTodoList })
  }
  todoAllChange = (status) => {
    const { todoList } = this.state
    const newTodoList = todoList.map(item => {
      return { ...item, status }
    })
    this.setState({ todoList: newTodoList })
  }
  deleteAllChenked = () => {
    const { todoList } = this.state
    const newTodoList = todoList.filter(item => {
      return !item.status
    })
    this.setState({ todoList: newTodoList })
  }
  render () {
    const { todoList } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addList={this.addList} />
          <List todoList={todoList} changeItemStatus={this.changeItemStatus} deletaTodo={this.deletaTodo} />
          <Footer todoList={todoList} todoAllChange={this.todoAllChange} deleteAllChenked={this.deleteAllChenked} />
        </div>
      </div>

    )
  }
}
