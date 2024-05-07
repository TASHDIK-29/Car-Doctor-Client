import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    const clearCookie = () =>{
        axios.post('https://car-doctor-server-zeta-blue.vercel.app/logout', {email : user?.email}, {withCredentials : true})
        .then(res =>{
            // console.log(res.data);
        })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            // const userEmail = currentUser?.email || user?.email;
            // console.log(userEmail);
            // const loggedUser = { email: userEmail };

            setUser(currentUser);
            // console.log(currentUser);
            setLoader(false);

            // if (!currentUser) {
            //     axios.post('https://car-doctor-server-zeta-blue.vercel.app/logout', {email: 'asd'}, { withCredentials: true })
            //         .then(res => {
            //             console.log(res.data);
            //         })
            // }

        })

        return () => unsubscribe;

    }, [])

    const authInfo = {
        createUser,
        user,
        loader,
        loginUser,
        loginOut,
        clearCookie

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
