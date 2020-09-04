import React, { Component } from "react";
import PropTypes from "prop-types";

import CommentItem from "../commnet-item/commentItem"

export default class commentList extends Component{

   static propTypes ={
        comments : PropTypes.array.isRequired,
        delComment:PropTypes.func.isRequired
    }

    render (){
        const {comments,delComment} = this.props;
        const display = comments.length === 0 ? "block" : "none"
        return (
            <div>
               <h3>评论回复</h3>
               <h2 style={{display}}>暂无评论</h2>
               <ul>
                  {
                      comments.map((item,index) => <CommentItem comment={item} key={index} index={index} delComment={delComment}/>)
                  }
                   
               </ul>
            </div>
        )
    }
}

// CommentList.PropTypes ={
//     comments : PropTypes.array.isRequired
// }