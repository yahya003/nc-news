import axios from "axios";


const myApi = axios.create({
    baseURL: "https://news-flash-hub.herokuapp.com",
  });


export const fetchArticles = () => {
    return myApi.get("/api/articles").then(({data : article}) => {
        return article.article;
    });
};