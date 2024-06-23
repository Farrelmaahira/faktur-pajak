import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const navigate = useNavigate();
    useEffect(() =>{
        const token = localStorage.getItem('token')
        if(!token) {
            return navigate('/')
        }
    }, [navigate])
    return <Outlet/>
}

export default ProtectedRoutes