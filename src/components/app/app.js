import React, { Component } from "react";

import CommentAdd from "../comment-add/commentAdd";
import CommentList from "../comment-list/commentList"

export default class App extends Component {
    state ={
        comments:[
            {username:"aaa",content :"这是1"},
            {username:"bbb",content:"这是222"}
        ]
    }

    addComment = (comment)=>{
        const {comments} =this.state;
        comments.unshift(comment);
        this.setState({comments})
    }

    delComment = (index)=>{
        const {comments} = this.state;
        comments.splice(index,1);
        this.setState({comments})
    }

    render() {
        const {comments} = this.state;
        return (
            <div>
                <div>
                    <header className="header">
                        <div>
                            <h1>发表评论</h1>
                        </div>
                    </header>
                </div>
                <div>
                    <CommentAdd addComment={this.addComment}/>
                </div>
                <div>
                    <CommentList comments={comments} delComment={this.delComment}/>
                </div>

            </div>

        )
    }
}