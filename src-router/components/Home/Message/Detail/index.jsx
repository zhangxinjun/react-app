import React, { Component } from 'react'
// qs库不需要单独下载，react已经自带的有了
// import qs from 'querystring'

export default class Detail extends Component {
  render () {
    /**  由此可以接受到由params传递的路由组件参数{id: "1"title: "sss"}
     console.log(this.props.match.params);
     const { id, title } = this.props.match.params
*/

    /** search传参接受
    console.log(this.props.location.search);
    search传参接受的是一个带有？的字符串
    const search = this.props.location.search.slice(1)
    利用qs将其序列化成对象
    const result = qs.parse(search)
    console.log(result);
*/
    /**
     * 路由传参接受status参数
     * const {id, title } = this.props.location.state
     */
    console.log(this.props);
    return (
      <div>
        <ul>
          {/* <li>{id}</li>
          <li>{title}</li> */}
        </ul>
      </div>
    )
  }
}
