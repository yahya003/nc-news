import { Navigate } from "react-router-dom";

const Home = ({user, setUser}) => {
    
    if (user === null) return <Navigate to="/"/>
    else
    return (
    <div className="background">
      <h2> Home </h2>
      <h3 className="loggedIn">You are logged in as {user.username}</h3>
      <img className ="avatar" src={user.avatar} alt= {user.username + "'s avatar"} />
    
    </div>
  )
}

export default Home