import { useEffect, useState} from "react";
import {fetchCommentsByArticle, patchVotesByArticleID} from "../api";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";
import ErrorPage from "./ErrorPage";
import { Button, Spinner } from "react-bootstrap";

const Comments = ({article_id, comments, setComments, vote, setVote, user, setUser, error, setError}) => {
    const [disableButton, setDisableButton] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [showComments, setShowComments] = useState(false)
    const [isListed, setIsListed] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false)



    useEffect(() => {
          setIsLoading(true)
          fetchCommentsByArticle(article_id).then((response) => {
            setComments(response)
            setIsLoading(false)
      })
      .catch(({response}) => {
        setError({ response })
      })
    } 
    , [isListed, isDeleted]);

    
    const handleClick = () => {
      setShowComments((prevState) => !prevState)
    }

    if (error) return <ErrorPage error={error} setError={setError}/>
    else if (isLoading) {
      return <h2></h2> 
    }
    else
    return ( 
      <>
        <div className="positionArrows">
          <button disabled = {disableButton} onClick={() => {
            setVote((currVote) => currVote +1)
            setDisableButton(true)
            patchVotesByArticleID(article_id, 1)
            }}   
            className="arrow">+</button> 
         
          <button disabled = {disableButton} onClick={() => {
            setVote((currVote) => currVote-1) 
            setDisableButton(true)
            patchVotesByArticleID(article_id,  -1)}} 
            className="arrow">-</button> 
        </div>

         <Button onClick={handleClick} className="commentButton">View all comments</Button>
         

         <ul className="commentList">
           <AddComment article_id={article_id} className="addComment" isListed={isListed} setIsListed={setIsListed} user={user} setUser={setUser} error={error} setError={setError}/>
           {comments.map((eachComment) => {
            if (showComments) {
             return (
               <li className="styleList" key={eachComment.body}>
                 <p className="spaceFromButtons">{eachComment.author} - {eachComment.body}</p>
                 <p className="commentDate">{eachComment.created_at.substring(11,16)}</p>
                 <p className="commentDate">{eachComment.created_at.substring(10,8)}-{eachComment.created_at.substring(7,5)}-{eachComment.created_at.substring(4,0)} </p>
                 <p className="commentDate">Votes: {eachComment.votes} </p>
                 <DeleteComment eachComment={eachComment} user={user} isDeleted={isDeleted} setIsDeleted={setIsDeleted} error={error} setError={setError}/>
               </li>
             )
            }
            else return "";
            })  
           }    
         </ul>         
      </> 
   )
}

export default Comments