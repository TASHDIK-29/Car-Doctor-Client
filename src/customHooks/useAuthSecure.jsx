import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-zeta-blue.vercel.app',
    withCredentials: true
});

const useAuthSecure = () => {

    const {loginOut} = useContext(AuthContext);
    const navigate = useNavigate();
    
    useEffect( () =>{
        axiosSecure.interceptors.response.use(res =>{
            return res;
        }, error =>{
            // console.log('error tracked : ', error.response.status);

            if(error.response.status === 401 || error.response.status === 403){
                loginOut()
                .then(()=>{
                    navigate('/login');
                })
                .catch(err =>{
                    console.log(err);
                })
            }
        })
    }, [])

    return axiosSecure ;
};

export default useAuthSecure;