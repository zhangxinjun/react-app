import Count from '../components/Count'

//connect用于连接ui组件与redux
import { connect } from 'react-redux'
import { addAction } from '../redux/num_action'
// 返回一个对象，该对象的可以就是传递给ui组件的propos的key，value就是传递给ui组件的value， 该函数的返回值用于传递状态
function mapStateToProps (state) {
  return {
    count: state
  }
}
// 返回一个对象，该对象的key就是传递给ui组件的key，方法就是操作props的value的状态的方法， 该函数的返回值用来操作状态
function mapDispatchToProps (dispatch) {
  return {
    mapAdd: (value) => {
      dispatch(addAction(value))
    }
  }
}
// 使用connect()()创建并暴露一个connect容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Count)

