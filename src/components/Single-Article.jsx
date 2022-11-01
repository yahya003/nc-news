import { useEffect } from "react";
import { fetchArticleByID, fetchCommentsByArticle} from "../api";
import { useParams } from "react-router-dom";
import { useState } from "react";

const SingleArticle =() => {
    const [article, setArticle] = useState([]);
    const { article_id } = useParams();
    const [vote, setVote] = useState("")
    const [comments, setComments] = useState([])
    const [commentVotes, setCommentVotes] = useState("")

    useEffect(() => {
      fetchArticleByID(article_id).then((response) => {        
        setArticle(response);
        setVote(response.votes)
      });
    }, [article_id]);

    const handleClick = () => {
      fetchCommentsByArticle(article_id).then((response) => {
        setComments(response)
      })
    }
    
    const title = article.title
    const author = article.author
    const body = article.body
    const commentCount = article.comment_count

    return (
    <>
    <ul className="singleArticle">
       <h2 className="singleArticleTitle">{title}</h2>
       <li className="author"> By {author}</li>
       <li className= "singleDate">Published -   </li>
       <li className="body">{body} </li>
       <li className = "comments"> </li>
       <div className="votes-comments">
       <li className="comments"> Comments - {commentCount} </li>
       <li className="votes">Votes:  {vote} 
       <button onClick={() => setVote(vote+1)} className="arrow"><img className="arrowImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///8A/wAAAAAARwDU1NQAxgAA+ACYmJgAmADj4+NXV1cAzQAAVgAAogAAsgAAhAD19fWoqKh+fn7S0tIACAAADQAARQBAQEAPDw8VFRUuru62AAACy0lEQVR4nO3c226bQBRGYUIcN5Cz0zbt+79oVVV17QYbZmbPPmmt+xH/J8QFFzAMqk3zOE+6l9RtN/5uZz2jX3+AiYl/gWmJ/4BJiafAlMRzYELiEXiflHgE3t3cpSSeAG9SEs+AGYn/AfMRPwGzEReAuYiLwEzEC8A8xIvALMQrwBzEq8AMxBVgfOIqMDpxAzA2cRMwMnEjMC5xMzAqsQAYk1gEjEgsBMYjFgOjESuAsYhVwEjESmAcYjUwCrEBGIPYBIxAbAT6JzYDvRMFgL6JIkDPRCGgX6IY0CtREOiTKAr0SBQG+iOKA70ROwB9EbsAPRE7Af0QuwG9EDsCfRC7Aj0QOwPtid2B1kQFoC1RBWhJVALaEdWAVkRFoA1RFWhBVAbqE9WB2kQDoC7RBKhJNALqEc2AWkRDoA7RFKhBNAb2J5oDexMdAPsSXQB7Ep0A+xHdAHsRHQH7EF0BexCdAeWJ7oDSRIdAWaJLoCTRKVCO6BYoRXQMlCG6BkoQnQPbie6BrcQAwDZiCGALMQiwnhgGWEsMBKwjhgLWEIMBy4nhgKXEgMAyYkhgCTEocDsxLHArMTBwGzE0cAsxOHCdGB64RkwAvE5MAbxGTAK8TEwDvERMBFwmpgIuEZMBPxOPwAfrZWI9nBGPwMen+6KeFSc/l017ejwhTmN1X/dKvv23+pHTMNcfHl+UhC8NG+eh4fB4qyT83jKy6R5qCW8bNs4tz2EI4TQMr29fyjsYCA8VO99el98U19sZCHU/7UKIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIrQX7jUyFOqGULZ3A+G7qrDlb/y1TarC4UMd+KELHIbDD1Xfz0Pt0F9UTYqsWvhMrwAAAABJRU5ErkJggg==" alt="Green-Arrow" /></button> 
       <button onClick={() => setVote(vote-1)} className="arrow"><img className="arrowImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX/////AAAAAADU1NRHAADGAAD4AACYmJiYAADj4+PS0tJIAADZ2dn19fWoqKiampp+fn5YWFiEAABWAACiAACyAADNAAAVFRUPDw8/Pz8NAABpvv/fAAAC00lEQVR4nO3d107jUBhFYSdABhNKQof3f9ARI8E4IcWn/FVr3Vven44s39nDUNnmbanZ+6Z2aG0fqr6vPnSBozpwuRxVhTcGwhtV4YWB8AKhgPBysdJocWkmXC90WhueoU52Z4gQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBFGFN4aCG9rx97d/ynuYWMg3DyUD72/a/tCvq6wrnHYJhduh4aL1YTrlpFNZ/ioJHxs2LhteQ4/V0rC1Wf9yHHym4On5+uiXpR8X72UTXt++kb9e4n+EF8VJ8v2ugOcEK+sl3Xqag+YjvgbmIx4CJiKeBiYiHgMmIZ4HJiEeAqYgngamIB4DhieeB4YnDgHGJo4DxiYOBcYljgfGJRYAgxJLAMGJJYCwxHLgcGINcBQxDpgIGItMAyxHhiE2AIMQWwDBiC2At0T24HOiT2Arol9gI6JvYBuif2ATok9gS6JfYEOib2B7oj9gc6IEkBXRBmgI6IU0A1RDuiEKAl0QZQFOiBKA82J8kBjogbQlKgDNCRqAc2IekAjoibQhKgLNCBqA9WJ+kBlogVQlWgDVCRaAdWIdkAloiVQhWgLVCBaA8WJ9kBhogegKNEHUJDoBShG9AMUInoCihB9AQWI3oDdif6AnYkegV2JPoEdiV6B3Yh+gZ2InoFdiL6BHYjegc1E/8BGYgRgEzEGsIEYBVhNjAOsJEYCVhFjASuI0YDFxHjAQmJEYBExJrCAGBU4mxgXOJMYGTiLGBs4gxgdeJYYH3iGmAF4kpgDeIKYBXiUmAd4hJgJeJCYC3iAmA34i5gPuEfMCNwh5gROiNdJgRNiVuA+MSFwl5gSOCUmBf4npgV+ExMDh2HcLrej7i3/AiSGilGUrFTqAAAAAElFTkSuQmCC" alt="Red-Arrow" /></button> 
       </li>
       <li className="viewComments"><button className="commentButton" onClick={handleClick}>View all {commentCount} comments</button></li>
       <li>
          <ul className="commentList">
            {comments.map((eachComment) => {
                return (
                  <li className="styleList" key={eachComment.body}>
                  <li>{eachComment.author} - {eachComment.body}</li>
                  <div className="">
                  <li className="commentDate">{eachComment.created_at.substring(0,10)}   </li>
                  <li className="commentDate">{eachComment.created_at.substring(11,16)}</li>
                  <li className="commentDate">Votes: {eachComment.votes}</li>
                  </div>
                  </li>
            )
          })  
          }        
          </ul>
        </li>
       </div>
    </ul>
    </>
        )
}

export default SingleArticle