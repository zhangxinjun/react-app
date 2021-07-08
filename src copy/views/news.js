import React,{Component} from "react"

export default class News extends Component{

    state ={
        news : ["1","2","3"]
    }

    render () {
        return (
            <ul>
                {
                   this.state. news.map((item,index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        )
    }
}