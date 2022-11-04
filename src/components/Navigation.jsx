import { Link } from "react-router-dom";

const Navigation = ({user, setUser}) => {
  return (
    <div className="navBack">

      <nav className="navBar">
        
        <Link to = "/home">
          <button className="homeButton">Home</button>
        </Link>

        <Link to = "/articles">
          <button className="articlesButton">Articles</button>
        </Link>
        
      </nav>

      <Link to="/">
        <button
          className="nav-button"
          id="log-out"
          type="button"
          onClick={() => {
            setUser(null);
          }}
        >
          Log Out
        </button>
      </Link>
    </div>
  );
};
export default Navigation;