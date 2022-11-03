import { useState } from "react"
import { postCommentByArticleID } from "../api";

const AddComment = ({article_id, isListed, setIsListed}) => {
   
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
      setIsListing(true);
      postCommentByArticleID(article_id, form).then(() => {
          setIsListing(false);
          setIsListed(true);
      })
    }



    if (clicked===false) return <button onClick={handleClick} className="addComment">Add a Comment</button>
    else if (isListing) return (<><h2 className="addCommentMessage">Submitting your comment... </h2><h3 className="dontRefresh">Please do not refresh the browser</h3></>);
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