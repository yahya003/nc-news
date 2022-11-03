import { useNavigate } from "react-router-dom";

const Home = ({user, setUser}) => {
    const navigate = useNavigate()
    
    if (user === null) {return navigate("/");}
    else
    return (
    <>
      <h2> Home </h2>
      <h3 className="loggedIn">You are logged in as {user.username}</h3>
      <img className ="avatar" src={user.avatar} alt= {user.username + "'s avatar"} />
    
    </>
  )
}

export default Home