import React,{ useState, useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CommentsContext } from '../context/commentsContext';

function NewReply({replyingTo,commentId,setIsVisible}) {

    const [comment, setComment] = useState(`@${replyingTo}, `);
    const { user, addReply} = useContext(CommentsContext);

    const handleClick = () =>{

      let id = uuidv4();
      let date = new Date();
      let content = comment.replace(`@${replyingTo},`,'').trim();

      if(content.length > 0){
        let newReply = {id:id,content:content,createdAt:date.toDateString(),score:0,replyingTo: replyingTo, user:user};
      
        addReply(newReply,commentId);
  
        setIsVisible(value => !value);
      }
     
      
    }
  
  
    return (
      <div className="comment new-comment">
        <img src={user.image.webp} alt="avatar" />
        <textarea  rows="5" value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
        <button className="primary" onClick={handleClick}>reply</button>
      </div> 
    );
  }

export default NewReply