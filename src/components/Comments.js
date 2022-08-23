import React from 'react';
import Comment from './Comment';

function Comments({comments,user,addReply, removeComment, downVote, upVote}) {

    const commentsJSX = comments.map(comment => <Comment user={user} key={comment.id} comment={comment} addReply={addReply} removeComment={ removeComment } upVote={upVote} downVote={downVote}/>)
    
    return commentsJSX;
}

export default Comments