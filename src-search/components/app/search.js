import React,{Component} from "react"
import PropTypes from "prop-types"


export default class Search extends Component {

    static propTypes ={
        setSearchName:PropTypes.func.isRequired
    }
    search = () => {
        const searchName = this.input.value.trim()
        if(searchName){
            this.props.setSearchName(searchName)
        }
    }
    render(){
        return (
            <div>
                <input type="text" ref={input => this.input = input}/>
                <button onClick={this.search}>搜索</button>
            </div>
        )
    }
}