import { useState } from "react"
import { postCommentByArticleID } from "../api";
import ErrorPage from "./ErrorPage";

const AddComment = ({article_id, isListed, setIsListed, user, setUser, error, setError}) => {
   
    const [clicked, setIsClicked] = useState(false)
    const [form, setForm] = useState({});
    const [isListing, setIsListing] = useState(false);
    const [disabled, setDisabled] = useState(true)

    const handleClick = () => {
      setIsClicked((prevState) => !prevState)
    }

    const handleChange = (event) => {
      setForm((currentForm) => {
        const information = { ...currentForm, [event.target.id]: event.target.value }
         setDisabled(false)
         return information;
        })

    }
    
    const handleSubmit = (event) => {
      event.preventDefault()
    
      setIsListed(false)
      setIsListing(true);
      postCommentByArticleID(article_id, form, user).then(() => {
          setIsListing(false);
          setIsListed(true);
      })
      .catch(({response}) => {
        setError({ response })
      })
    }

    if (error) return <ErrorPage error={error} setError={setError}/>
    else if (clicked===false) return <button onClick={handleClick} className="addComment">Add a Comment</button>
    else if (isListing) return (<><h3 className="addCommentMessage">Submitting your comment... </h3><h3 className="dontRefresh">Please do not refresh the browser</h3></>);
    else 
    return (
        <>
          <button onClick={handleClick} className="addComment">Add a Comment</button>
          <form  onSubmit={handleSubmit} id="form">
             <h3 className= "formTitle">Add a Comment</h3>
            <label htmlFor="body">Comment</label>
            <br />
            <textarea name="body" id="body" required onChange={handleChange} cols="30" rows="10"></textarea>
            <button disabled= {disabled} value="Submit"  className="submitButton">Submit</button>
         </form>
        </>
    )
}

export default AddComment