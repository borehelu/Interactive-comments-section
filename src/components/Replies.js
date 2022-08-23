import React from 'react';
import Reply from './Reply';

function Replies({commentId,removeComment,replies,user,addReply,upVote, downVote}) {
   const repliesJSX = replies.map(reply => <Reply commentId={commentId} addReply={addReply} removeComment={removeComment} key={reply.id} reply={reply} user={user} upVote={upVote} downVote={downVote}/>);
   return repliesJSX;
  
}

export default Replies