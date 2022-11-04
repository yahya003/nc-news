import Reroute from "./Reroute"

const ErrorPage = ({error, setError}) => {
    
    if(error) {
        const status = error.response.status
        const message = error.response.data.msg
       
      return (
        <>
        <h1 className="error">{status} Error</h1>
        <h2>Error - {message}</h2>
        <Reroute/>
        
        </>
      )
    }
    else{
        return (
            <>
            <h1 className="error">404 Error</h1>
            <h2 className="errorMessage">Page Not Found</h2>
            <Reroute/>
            </>
          )
    }
}


export default ErrorPage