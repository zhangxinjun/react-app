import React, { Component } from "react"
import Proptypes from "prop-types"

export default class CommentItem extends Component {
    static  propTypes ={
        comment : Proptypes.object.isRequired,
        delComment:Proptypes.func.isRequired,
        index:Proptypes.number.isRequired
    }
    handerdel = ()=>{
        const {comment,delComment,index} = this.props;
        if(window.confirm(`确定将要删除${comment.username}的评论吗`)){
            delComment(index);
        }
        
    }
   
    render() {
        const {comment} = this.props
        return (
            <li>
                <div onClick={this.handerdel}>删除</div>
                <p>
                    <span>{comment.username}</span>
                    <span>说：</span>
                </p>
                <p>{comment.content}</p>
            </li>
        )
    }
}