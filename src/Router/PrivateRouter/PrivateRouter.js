import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../../Contexts/AuthContext/AuthContext";

export const PrivateRouter = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useContext(AuthProvider);

    if (loading) {
        return <div><p>Loading...</p></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}