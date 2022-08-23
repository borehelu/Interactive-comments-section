import { useState } from 'react';
import Comments from './components/Comments';
import data from './data/data.json';
import NewComment from './components/NewComment';



function App() {
  const [comments,setComments] = useState(data.comments);
  const user = data.currentUser;

  // console.log(`There are ${comments.length} comments, and ${comments[1].replies.length} replies in second comment`);

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

  function removeComment(commentId,replyId = null,isReply){
    let newComments = [];
    if(!isReply){
      newComments = comments.filter(comment => comment.id !== commentId);

    }else{
      newComments = comments.map(comment => {
        if(comment.id === commentId){
         let replies = comment.replies.filter(reply => reply.id !== replyId);
         comment.replies = replies;
        }
        return comment;
      });
    }

    

    setComments(newComments);

  }

  function upVote(commentId,replyId = null,isReply){
    let newComments = [];
    if(!isReply){
      newComments = comments.map(comment => {
        if(comment.id === commentId){
          comment.score += 1;
        }
        return comment;
      })

    }else{
      newComments = comments.map(comment => {
        if(comment.id === commentId){
         comment.replies.map(reply => {
          if(reply.id === replyId){
            reply.score += 1;
          }
         }
         )
        }

        return comment;
        
      });
    }
    

    setComments(newComments);

  }

  function downVote(commentId,replyId = null,isReply){
    let newComments = [];
    if(!isReply){
      newComments = comments.map(comment => {
        if(comment.id === commentId){
          comment.score -= 1;
        }
        return comment;
      })

    }else{
      newComments = comments.map(comment => {
        if(comment.id === commentId){
         comment.replies.map(reply => {
          if(reply.id === replyId){
            reply.score -= 1;
          }
         }
         )
        }

        return comment;
        
      });
    }

    

    setComments(newComments);

  }
  
  return (
   <main>
     
     <Comments comments={ comments } user={ user } addReply={ addReply } removeComment={ removeComment } upVote={upVote} downVote={downVote}/> 
     <NewComment user={ user } addComment={ addComment } />
    </main>
  );
}

export default App;
