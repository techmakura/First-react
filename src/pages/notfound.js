import { Link } from "react-router-dom";

const NotFound = () =>{
    return(
        <>
            <div>404 Error; page not found</div>
            
            <Link to={"/dashboard"}>
                Go back to homepage
            </Link>
        </>
    )
}

export default NotFound;