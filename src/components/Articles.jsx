import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";

const Articles = () => {
    const [articles, setArticles] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [form, setForm] = useState({})
  
    
      useEffect(() => {
      setIsLoading(true);
      fetchArticles().then((response) => { 
        setArticles(response);
         setIsLoading(false);
      });
    }, []);

   
    const handleChange = (event) => {
      setForm((currentForm) => {
          const information = { ...currentForm, [event.target.id]: event.target.value }
          return information
      })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      setIsLoading(true);
      fetchArticles(form.sort_by, form.order).then((response) => { 
        setArticles(response);
         setIsLoading(false);
         
      });
    }
    
    if (isLoading) return <h2 className= "loading">Loading...</h2>
    
    return (
      <>
        <h2 className = "articlesTitle">All Articles</h2>
  
        <div className="filterArticles">
            <form action="">
         <label htmlFor="sort_by" className="sortBy">Sort By:</label>
         <select id="sort_by" className="filterSortButton" onChange={handleChange}  >
           <option  value="created_at">Date</option>
           <option  value="article_id">Article ID</option>
           <option  value="votes">Votes</option>
           <option  value="comment_count">Comment Count</option>
         </select>

         <label htmlFor="order"  className="orderBy">Order: </label>
         <select id="order" className="filterOrderButton"  onChange={handleChange}>
           <option value="DESC">Descending</option>
           <option value="ASC">Ascending</option>
         </select>
         </form>
         <button className="filterArticlesButton" onClick= {handleSubmit} value="Submit">Submit</button>
        </div> 

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