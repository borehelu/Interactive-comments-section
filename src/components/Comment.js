import React,{ useState, useContext } from 'react';
import NewReply from './NewReply';
import Replies from './Replies';
import DeleteModal from './DeleteModal';
import Score from './Score';
import { CommentsContext } from '../context/commentsContext';




function Comment({comment }) {
    const [isVisible,setIsVisible] = useState(false);
    const [showModal,setShowModal] = useState(false);
    const [isEditing,setIsEditing] = useState(false);
    const [content,setContent] = useState(comment.content);
    const { user, addReply,removeComment, upVote, downVote, editComment } = useContext(CommentsContext);
  

    function handleUpdate(){
      if(content.length > 0){
        editComment(comment.id,content);
        setIsEditing(false);
      }

    }

  return (
    <div>
    <DeleteModal showModal={showModal} setShowModal={setShowModal} commentId={ comment.id} isReply={false} removeComment={ removeComment }/>
    <div className="comment" >
     <Score score={comment.score}  commentId={ comment.id} isReply={false} replyId={null}/>
      <div className="comment__details">
        <div className="comment__heading">
          <div className="user_details">
            <img src={comment.user.image.webp} alt="user avatar" />
            <p className="user_name">{comment.user.username}</p>
            { user.username === comment.user.username ? (<p className='pill'>you</p>):""}
            <p className="time">{comment.createdAt}</p>
          </div>
          { user.username === comment.user.username ? 
              <div className='flex'>
                <button className="delete_btn btn"  onClick={()=> setShowModal(!showModal)}>
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
                delete
              </button>
                <button className="edit_btn btn"  onClick={()=> setIsEditing(!isVisible)}>
                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
                edit
              </button>
              </div>
              
              :
               <button className="reply_btn btn"  onClick={()=> setIsVisible(!isVisible)}>
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
                reply
              </button>
          
          }
        </div>

          {
            isEditing 
            ?
            <div className='edit-comment'>
             <textarea  rows="5" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
             <button className="primary" onClick={ handleUpdate }>update</button>
            </div>
            :
            <p className="comment__text">{comment.content}</p>
          }
        

      </div>
    </div> 
    {
      isVisible && <NewReply replyingTo= {comment.user.username} commentId = {comment.id}  setIsVisible={setIsVisible}/>
    }

    

    <div className="replies_container">
      {comment.replies && <Replies addReply={addReply} commentId={comment.id} user={user} replies={comment.replies} removeComment={ removeComment } upVote={upVote} downVote={downVote}/>}
      
    </div>

    </div>
  )
}

export default Comment