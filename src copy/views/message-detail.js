import React,{Component} from "react"


export default class MessageDetail extends Component{
  
    state ={
        messagesDetail  :[
            {id:1,title:"messages1",content:"1的内容"},{id:2,title:"messages2",content:"2的内容"},{id:3,title:"messages3",content:"3的内容"}
        ]
    }
    render () {
        const {id} = this.props.match.params
       const message =  this.state.messagesDetail.find((item) => item.id === id*1)

        return (
            <ul>
                <li>id:{message.id}</li>
                <li>title:{message.title}</li>
                <li>content:{message.content}</li>
            </ul>
        )
    }
}