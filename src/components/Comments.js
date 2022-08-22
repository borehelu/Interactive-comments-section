import React from 'react';
import Comment from './Comment';

function Comments({comments,user,addReply}) {

    const commentsJSX = comments.map(comment => <Comment user={user} key={comment.id} comment={comment} addReply={addReply}/>)
    
    return commentsJSX;
}

export default Comments