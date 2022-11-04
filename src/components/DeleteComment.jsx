import { deleteCommentByID } from "../api"
import { useState } from "react";

const DeleteComment = ({user, isDeleted, setIsDeleted,eachComment}) => {
    const [isDeleting, setIsDeleting] = useState(false);
    
    const handleClick = (event) => {
      event.preventDefault()
      setIsDeleted(false)
      setIsDeleting(true)
      deleteCommentByID(eachComment.comment_id).then(()=> {
        setIsDeleting(false)
        setIsDeleted(true)
        
      })
    }

    if (isDeleting) 
    return (
    <>
    <h2 className="addCommentMessage">Deleting your comment... </h2>
    <h3 className="dontRefresh">Please do not refresh the browser</h3>
    </>
    );
    
    
    else if (user.username === eachComment.author)
    return (
     <>
     <button onClick={handleClick} className="deleteComment">Delete comment</button>
     </>
     )
    else {
        return <> </>
    }  
}


export default DeleteComment