import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <h2 className = "navTitle">Navigation Bar</h2>
      <nav className="navBar">
        
        <Link to = "/">
          <button className="homeButton">Home</button>
        </Link>

        <Link to = "/articles">
          <button className="articlesButton">Articles</button>
        </Link>
        
      </nav>
    </>
  );
};
export default Navigation;