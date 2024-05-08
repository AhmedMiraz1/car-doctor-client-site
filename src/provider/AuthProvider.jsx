import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";




export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading ]= useState(true)

    console.log(user);

    const createUser = (email, password)=>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in 
    const signIn = (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logOut 

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged (auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log("currentUser", currentUser);
        })
        return () => {
            return unsubscribe()
        }
    },[])


    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;