import { useState } from 'react';
import Comments from './components/Comments';
import data from './data/data.json';
import NewComment from './components/NewComment';


function App() {
  const [comments,setComments] = useState(data.comments);
  

  const user = data.currentUser;

  function addComment(comment){

    let newComments = [...comments,comment];
    setComments(newComments);

  }

  function addReply(reply,commentId){
    
    let newComments = comments.map(comment => {
      if(comment.id === commentId){ 
        comment.replies = [...comment.replies, reply];
      }
      return comment;
    });

    setComments(newComments);
  }
  
  return (
   <main>
     <Comments comments={ comments } user={ user } addReply={ addReply } /> 
     <NewComment user={ user } addComment={ addComment } />
    </main>
  );
}

export default App;
