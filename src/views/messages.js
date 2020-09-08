import React,{Component} from 'react'

export default class Message extends Component {
    state = {
        messages :[]
    }

    componentDidMount () {
        setTimeout(() => {
            const  messages = [{id:1,title:"messages1"},{id:2,title:"messages2"},{id:3,title:"messages3"}];
            this.setState({messages})
        },1000)
    }

    render () {
        return (
            <ul>
                {
                   this.state. messages.map((item,index) => (
                        <li>
                            <a href="#">{item.title}</a>
                        </li>
                    ))
                }
            </ul>
        )
    }
}