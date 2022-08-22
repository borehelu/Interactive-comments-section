import React from 'react';
import Comment from './Comment';

function Comments({comments,user,addReply, removeComment}) {

    const commentsJSX = comments.map(comment => <Comment user={user} key={comment.id} comment={comment} addReply={addReply} removeComment={ removeComment }/>)
    
    return commentsJSX;
}

export default Comments