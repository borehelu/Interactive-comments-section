import React,{useState} from 'react'

function NewComment({user,replyingTo}) {
  const [comment, setComment] = useState(`@${replyingTo}`);


  return (
    <div className="comment new-comment">
      <img src={user.image.webp} alt="avatar" />
      <textarea  rows="5" value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
      <button className="primary">reply</button>
    </div> 
  );
}

export default NewComment