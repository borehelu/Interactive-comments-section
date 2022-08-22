
import { useState } from 'react';
import Comment from './components/Comment';





function App({data}) {
  const user = data.currentUser;
  
  return (
   <main>
      {
        data.comments.map(comment => <Comment user={user} key={comment.id} comment={comment}/>)
      }
      
    </main>
  );
}

export default App;
