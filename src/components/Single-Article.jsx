import { useEffect } from "react";
import { fetchArticleByID} from "../api";
import { useParams } from "react-router-dom";
import { useState } from "react";
import AddComment from "./AddComment";
import Comment from "./Comments";
import { useNavigate } from "react-router-dom";

const SingleArticle =({user, setUser}) => {
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
      });
    } 
    , [article_id]);

    if (user === null) {return navigate("/");}
    else if (isLoading) return <h2>Loading...</h2>
    else
    return (
       <>
        <div className="singleArticle">
          <h2 className="singleArticleTitle">{article.title}</h2>
          <h4 className="author"> By {article.author}</h4>
          <h4 className= "singleDate">Published - {article.created_at.substring(10,8)}-{article.created_at.substring(7,5)}-{article.created_at.substring(4,0)}   </h4>
          <p className="body">{article.body} </p>
          <div className="votes-comments">
            <p className="comments"> Comments - {article.comment_count} </p>
            <p className="votes"> Votes:  {vote} </p>
            <Comment vote= {vote} setVote={setVote} article_id={article_id} comments={comments} setComments={setComments} user={user} setUser={setUser}/> 
          </div>
        </div>
       </>
    )

}

export default SingleArticle