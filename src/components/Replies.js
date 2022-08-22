import React from 'react';
import Reply from './Reply';

function Replies({commentId,removeComment,replies,user,addReply}) {
   const repliesJSX = replies.map(reply => <Reply commentId={commentId} addReply={addReply} removeComment={removeComment} key={reply.id} reply={reply} user={user}/>);
   return repliesJSX;
  
}

export default Replies