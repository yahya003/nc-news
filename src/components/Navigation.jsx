import { Link } from "react-router-dom";

const Navigation = ({user, setUser}) => {
  return (
    <>
      <h2 className = "navTitle">Navigation Bar</h2>
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
    </>
  );
};
export default Navigation;