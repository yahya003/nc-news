import { useState } from "react"
import { postCommentByArticleID } from "../api";
import Listed from "./Listed";

const AddComment = ({article_id}) => {

    const [clicked, setIsClicked] = useState(false)
    const [form, setForm] = useState({});
    const [isListing, setIsListing] = useState(false);
    const [isListed, setIsListed] = useState(false);
    const [disabled, setDisabled] = useState(true)

    const handleClick = () => {
      setIsClicked(true)
    }

    const handleChange = (event) => {
      setForm((currentForm) => {
        const information = { ...currentForm, [event.target.id]: event.target.value }
        const username = information.username
        const body = information.body
        if (username == undefined || body == undefined || body.length == 0) {
         setDisabled(true)
         return information
        } 
        else {
         setDisabled(false)
         return information;
        }
      })
    }
    
    const handleSubmit = (event) => {
      event.preventDefault()
      setIsListing(true);
      postCommentByArticleID(article_id, form).then(() => {
          setIsListing(false);
          setIsListed(true);
          setTimeout(() => {
            window.location.reload();
          }, 1500);
          
      })
    }



    if (clicked===false) return <button onClick={handleClick} className="addComment">Add a Comment</button>
    else if (isListed) return <Listed/>;
    else if (isListing) return (<><h2 className="addCommentMessage">Submitting your comment... </h2><h3 className="dontRefresh">Please do not refresh the browser</h3></>);
    else 
    return (
        <>
          <button className="addComment">Add a Comment</button>
          <form  onSubmit={handleSubmit} id="form">
             <h3 className= "formTitle">Add a Comment - *All fields are mandatory</h3>
             <label htmlFor="username"  className="formSubHeading">*Username:</label>
            <select id="username" onChange={handleChange} >
             <option disabled selected value>
             Select a username
             </option>
              <option value="jessjelly">jessjelly</option>
              <option value="grumpy19">grumpy19</option>
              <option value="cooljmessy">ooljmessy</option>
            </select>
            <br />
            
            <label htmlFor="body">*Comment</label>
            <br />
            <textarea name="body" id="body" onChange={handleChange} cols="30" rows="10"></textarea>
            <button disabled= {disabled} value="Submit"  className="submitButton">Submit</button>
         </form>
        </>
    )
}

export default AddComment