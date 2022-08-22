import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function NewComment({user,addComment}) {
  const [comment, setComment] = useState("");

  const handleClick = () =>{
    let id = uuidv4();
    let date = new Date();
    let newComment = {id:id,content:comment,createdAt:date.toDateString(),score:0,user:user};

    addComment(newComment);
  }


  return (
    <div className="comment new-comment">
      <img src={user.image.webp} alt="avatar" />
      <textarea placeholder='Add a comment...' rows="5" value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
      <button className="primary" onClick={ handleClick }>send</button>
    </div> 
  );
}

export default NewComment