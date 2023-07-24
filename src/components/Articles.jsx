import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Logout from "./Logout";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { Col, Dropdown, Form, Row } from "react-bootstrap";



const Articles = ({user, setUser, error, setError}) => {
    const [articles, setArticles] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [form, setForm] = useState({})
    
    const navigate = useNavigate()
    
      useEffect(() => {
      setIsLoading(true);
      fetchArticles().then((response) => { 
        setArticles(response);
         setIsLoading(false);
      })
      .catch(({response}) => {
        setError({ response })
      })
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
      })
      .catch(({response}) => {
        setError({ response })
      })
    }
    

    if (error)  {
      return <ErrorPage error={error}/>
    }

    else if (user === null) {
      return  navigate("/");
    }

    else if (isLoading) {
      return (
        <Spinner style={{position: "absolute", top: "30%", left: "46%", width: "10em", height: "10em"}} animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )
    }
    
    else
    return (
      <div>

          <Row style={{justifyContent: "center"}} >
            <Col style={{textAlign: "center"}}>
             <h3>{user.username}</h3>
            </Col>
            <Col style={{textAlign: "center"}}><Logout/></Col>
          </Row>
          
          <Row style={{marginLeft: "17%", marginTop: "3%"}}>
            <Col style={{textAlign:"center"}}>
             <Form.Select onChange={handleChange} >
              <option hidden defaultValue="created_at">Filter articles by...</option>
              <option  value="created_at">Date</option>
              <option  value="article_id">Article ID</option>
              <option  value="votes">Votes</option>
              <option  value="comment_count">Comment Count</option>
             </Form.Select>             
            </Col>
            
            <Col style={{}}>
             <Form.Select id="order" onChange={handleChange}>
              <option hidden defaultValue="DESC">Order articles by...</option>
              <option value="DESC">Descending</option>
              <option value="ASC">Ascending</option>
             </Form.Select>
            </Col>

            <Col style={{textAlign: "left"}}>
              <Button onClick= {handleSubmit} value="Submit">Submit</Button>
            </Col>
          </Row>   


        <div className="background">
        <ul className="listItems">
          {articles.map((article) => {
            article.img = ""
            if (article.topic == "football") article.img = "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/176455/s960_Football_gov.uk.jpg"
            else if (article.topic == "coding") article.img = "data:image/jpeg;base64,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"
            else if (article.topic == "cooking") article.img = "data:image/jpeg;base64,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"
            return (
              <li className = "eachArticle" key = {article.article_id}>
                <Card style={{ width: '30rem' }}>
                  <Card.Img variant="top" style={{ width: '30rem', height:"20rem" }}src={article.img} />
                  <Card.Body>
                    <Card.Title> {article.created_at.substring(10,8)}-{article.created_at.substring(7,5)}-{article.created_at.substring(4,0)}</Card.Title>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.body.slice(0,140)}.....</Card.Text>
                    <Card.Text>💬 - {article.comment_count}</Card.Text>
                    <Link to={`/articles/${article.article_id}`}>
                      <Button variant="primary">Read More</Button>
                    </Link>
                    <Card.Text style={{textAlign: "left"}}>{article.article_id}</Card.Text>
                  </Card.Body>
                </Card>
                
              
              </li>
            );
           })
          }
        </ul>
        </div>
      </div>
    )
}

export default Articles