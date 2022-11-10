
import { Navigate } from "react-router-dom";

const Home = ({user, setUser, setError}) => {
  
    if (user === null) return <Navigate to="/"/>
    else
    
    return (
      <section>

      <h2 className="homePage"> Home </h2>
      <img className ="avatar" src={user.avatar} alt= {user.username + "'s avatar"} />
      <h3 className="loggedIn">You are logged in as {user.username}</h3>
    
    
    </section>
  )
}

export default Home