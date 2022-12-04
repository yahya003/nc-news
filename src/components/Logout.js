import { NavLink } from "react-router-dom";

const Logout = ({setUser}) => {
  return (
    <>
    
     <NavLink to ="/">
     <button  
          id="log-out"

          onClick={() => {
            setUser(null);
          }}>
          Log Out
     </button>
     </NavLink>
    </>
  )
}

export default Logout