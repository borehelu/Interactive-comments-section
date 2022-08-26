import React from 'react';
import Reply from './Reply';

function Replies({ commentId, replies }) {
   
   return replies.map(reply => <Reply commentId={commentId}  key={reply.id} reply={reply} />);
  
}

export default Replies;