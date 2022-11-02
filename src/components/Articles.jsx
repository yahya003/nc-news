import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";

const Articles = () => {
    const [articles, setArticles] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      setIsLoading(true);
      fetchArticles().then((response) => { 
        setArticles(response);
         setIsLoading(false);
      });
    }, []);
    
    if (isLoading) return <h2 className= "loading">Loading...</h2>
    
    return (
      <>
        <h2 className = "articlesTitle">Latest News</h2>
        
        <ul className="listItems">
          {articles.map((article) => {
            return (
              <li className="eachArticle" key = {article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                <h2 className="date"> {(article.created_at).substring(0,10)}</h2>
                <h3 className="articleInfo">{article.title}</h3>
                <h4>By {article.author}</h4>
                <h4 className="openArticle" > Read More </h4>
                </Link>
              </li>
            );
           })
          }
        </ul>
        
      </>
    )
}

export default Articles