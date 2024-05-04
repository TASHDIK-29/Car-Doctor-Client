import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loader}= useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children ;
    }

    return <Navigate to = '/login' state={location.pathname}></Navigate>;
};

export default PrivateRoute;