import { useEffect } from "react";
import { fetchArticleByID} from "../api";
import { useParams } from "react-router-dom";
import { useState } from "react";

const SingleArticle =() => {
    const [article, setArticle] = useState([]);
    const { article_id } = useParams();

    useEffect(() => {
      fetchArticleByID(article_id).then((response) => {        
        setArticle(response);
      });
    }, [article_id]);


    
    return (
    <>

    <ul className="singleArticle">
       <h2 className="singleArticleTitle">{article.title}</h2>
       <li className="author"> By {article.author}</li>
       <li className= "singleDate">Published - </li>
       
       <li className="body">{article.body}</li>
       <li className = "comments"></li>
       <div className="votes-comments">
       <li className="comments"> Comments - {article.comment_count} </li>
       <li className="votes">Votes - {article.votes}</li>
       </div>
    </ul>
    </>
        )
}

export default SingleArticle