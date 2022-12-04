import axios from "axios";


const myApi = axios.create({
    baseURL: "https://news-flash.cyclic.app/",
  });


export const fetchArticles = (sort, order) => {
    if (sort === undefined) {sort="created_at"}
    if (order=== undefined) {order="DESC"}
    return myApi.get(`/api/articles?sort_by=${sort}&order=${order}`).then(({data : {article}}) => {
        return article
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

export const patchVotesByArticleID = (article_id, inc_votes) => {
    return myApi.patch(`/api/articles/${article_id}`, {inc_votes: inc_votes})
}

export const postCommentByArticleID = (article_id, comment, user) => {
    return myApi.post(`/api/articles/${article_id}/comments`, {username: user.username, body: comment.body})
}

export const deleteCommentByID = (commentID) => {
    return myApi.delete(`/api/comments/${commentID}`)
}
