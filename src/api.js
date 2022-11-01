import axios from "axios";


const myApi = axios.create({
    baseURL: "https://news-flash-hub.herokuapp.com",
  });


export const fetchArticles = () => {
    return myApi.get("/api/articles").then(({data : article}) => {
        return article.article;
    });
};

export const fetchArticleByID = (article_id) => {
    return myApi.get(`/api/articles/${article_id}`).then(({data: {article}}) => {
        return article
    });
};

export const fetchCommentsByArticle = (article_id) => {
    return myApi.get(`/api/articles/${article_id}/comments`).then(({data: {comments}}) => {
       return comments
    })
}