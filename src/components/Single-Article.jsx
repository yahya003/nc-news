import { useEffect } from "react";
import { fetchArticleByID} from "../api";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import Comment from "./Comments";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Logout from "./Logout";

const SingleArticle =({user, setUser, error, setError}) => {
    const [article, setArticle] = useState([]);
    const { article_id } = useParams();
    const [vote, setVote] = useState("")
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate()

    useEffect(() => {
      setIsLoading(true)
      fetchArticleByID(article_id).then((response) => {        
        setArticle(response);
        setVote(response.votes)
        setIsLoading(false)
      })
      .catch(({response}) => {
        setError({ response })
      })
    } 
    , [article_id]);

    
    if (error) return <ErrorPage error={error} setError={setError}/>
    else if (user === null) {return navigate("/");}
    else if (isLoading) return <h2>Loading...</h2>
    else
    return (
      <>
       <NavLink to = "/articles"> <button className="button">Back to articles</button></NavLink><Logout/>
       <div className="background">
        <div className="singleArticle">
          <h2 className="singleArticleTitle">{article.title}</h2>
          <h4 className="author"> By {article.author}</h4>
          <h4 className= "singleDate">Published - {article.created_at.substring(10,8)}-{article.created_at.substring(7,5)}-{article.created_at.substring(4,0)}   </h4>
          <p className="body">{article.body} </p>
          <div className="votes-comments">
            <p className="comments"> Comments - {article.comment_count} </p>
            <p className="votes"> Votes:  {vote} </p>
            <Comment vote= {vote} setVote={setVote} article_id={article_id} comments={comments} setComments={setComments} user={user} setUser={setUser} error={error} setError={setError}/> 
          </div>
        </div>
       </div>
       </>
    )

}

export default SingleArticle