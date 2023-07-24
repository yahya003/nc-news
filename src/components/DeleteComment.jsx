import { deleteCommentByID } from "../api"
import { useState } from "react";
import ErrorPage from "./ErrorPage";
import { Button } from "react-bootstrap";

const DeleteComment = ({user, isDeleted, setIsDeleted,eachComment, error, setError}) => {
    const [isDeleting, setIsDeleting] = useState(false);
    
    const handleClick = (event) => {
      event.preventDefault()
      setIsDeleted(false)
      setIsDeleting(true)
      deleteCommentByID(eachComment.comment_id).then(()=> {
        setIsDeleting(false)
        setIsDeleted(true)
        
      })
      .catch(({response}) => {
        setError({ response })
      })
    }
    

    if (error) return <ErrorPage error={error}/>
    else if (isDeleting) 
    return (
    <>
    <h2 className="addCommentMessage">Deleting your comment... </h2>
    <h3 className="dontRefresh">Please do not refresh the browser</h3>
    </>
    );
    
    
    else if (user.username === eachComment.author)
    return (
     <>
     <Button onClick={handleClick} variant="danger">Delete comment</Button>
     </>
     )
    else {
        return <> </>
    }  
}


export default DeleteComment