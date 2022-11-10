import { NavLink } from "react-router-dom";

const Navigation = ({user, setUser}) => {
  return (
      <nav className="navBar">
        
        <NavLink to = "/home" className={({ isActive }) => (isActive ? "link-active" : "link")}>
          Home
        </NavLink >

        <NavLink to = "/articles" className={({ isActive }) => (isActive ? "link-active" : "link")}>
          Articles
        </NavLink>
              
        <NavLink  to="/" 
          id="log-out"

          onClick={() => {
            setUser(null);
          }}>
          Log Out
        </NavLink >
      </nav>
  );
};
export default Navigation;