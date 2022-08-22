import React from 'react';
import Comment from './Comment';

function Comments({comments,user}) {

    const commentsJSX = comments.map(comment => <Comment user={user} key={comment.id} comment={comment}/>)
    
    return commentsJSX;
}

export default Comments