import React,{useState} from 'react';

function DeleteModal({showModal,setShowModal,commentId,replyId,isReply,removeComment}) {

    function handleClose(){
        setShowModal(!showModal);
    }

    function handleDelete(){
        removeComment(commentId,replyId,isReply);
    }

  return (
    
    <div className={`modal__overlay ${showModal ? 'show':'hide'}`}>
        <div className={`modal__container ${showModal ? 'show':'hide'}`}>
            <h2>Delete comment</h2>
            <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
            <div className="modal__buttons">
                <button onClick={handleClose} className="modal__btn cancel__modal">No, cancel</button>
                <button onClick={handleDelete} className="modal__btn delete__modal">Yes, delete</button>
            </div>
        </div>
    </div>

  )
}

export default DeleteModal