import React, { Component } from "react";
import PropTypes from "prop-types"

export default class commentAdd extends Component {

    static propTypes ={
        addComment : PropTypes.func.isRequired
    }

    state = {
        username : "",
        content:""
    }

    handerSubmit = (event) => {
        event.preventDefault()
        const comment = this.state;
        this.props.addComment(comment);
        this.setState({
            username : "",
            content:""
        })
    }
    handerNameChange = (event) =>{
        const username = event.target.value;
        this.setState({username})
    }
    handerContentChange = (event) =>{
       
        const content = event.target.value;
        this.setState({content}) 
    }
    render() {
        const {username,content} = this.state
        return (
            <div>
                <form >
                    <div className="name">
                        <label htmlFor="">用户名</label>
                        <input type="text" className="form-control" value={username} onChange={this.handerNameChange} />
                    </div>
                    <div>
                        <label htmlFor="">评论内容</label>
                        <textarea name="" id="" cols="30" rows="10" value={content} onChange={this.handerContentChange}></textarea>

                    </div>
                    <div>
                        <button onClick={this.handerSubmit}>提交</button>
                    </div>
                </form>
            </div>
        )
    }
}

