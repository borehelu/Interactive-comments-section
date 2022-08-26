import React, { useContext } from 'react';
import { CommentsContext } from '../context/commentsContext';
import Comment from './Comment';

function Comments() {
    const { comments } = useContext(CommentsContext);
    
    return (
        comments.map(comment => <Comment  key={comment.id} comment={comment}  />)
    );
}

export default Comments