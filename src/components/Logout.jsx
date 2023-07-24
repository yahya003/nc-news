import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Logout = ({setUser}) => {
  return (
    <>
    
     <NavLink to ="/">
     <Button  
          variant="danger"

          onClick={() => {
            setUser(null);
          }}>
          Log Out
     </Button>
     </NavLink>
    </>
  )
}

export default Logout