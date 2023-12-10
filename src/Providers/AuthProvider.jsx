import { useState } from "react";
import { createContext } from "react";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../services/firebase.config";
import { useEffect } from "react";


const auth = getAuth(app);


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null);


// sign up new user

const signUp = (email,password)=>{
 return   createUserWithEmailAndPassword(auth, email, password)
}

//  login user

const logIn = (email,password)=>{
  return  signInWithEmailAndPassword(auth, email, password)
}

// log out user

const logOut = ()=>{
  return  signOut(auth)
}



useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        console.log('current user',currentUser)
        setUser(currentUser)
    });
    
    return () => {
        unsubscribe();
      };
},[])



const authInfo ={
user,
signUp,
logIn,
logOut

}
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;