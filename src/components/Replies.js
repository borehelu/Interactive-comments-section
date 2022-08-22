import React from 'react';
import Reply from './Reply';

function Replies({replies,user}) {
   const repliesJSX = replies.map(reply => <Reply reply={reply} user={user}/>);
   return repliesJSX;
  
}

export default Replies