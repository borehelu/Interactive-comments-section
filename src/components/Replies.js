import React from 'react';
import Reply from './Reply';

function Replies({commentId,removeComment,replies,user}) {
   const repliesJSX = replies.map(reply => <Reply commentId={commentId} removeComment={removeComment} key={reply.id} reply={reply} user={user}/>);
   return repliesJSX;
  
}

export default Replies