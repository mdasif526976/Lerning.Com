import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { app } from '../firebase/Firebase.int';
const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setNewuser] = useState(null)
    const [loading,setloading] = useState(true)
    const [dark, setdark] = useState('white')
  
    
    const githubSign = () => {
        const provider = new GithubAuthProvider();
        setloading(true)
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setNewuser(user)
            })
            .catch(error => console.error(error))

    }

    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider()
        setloading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setNewuser(user);
            })
            .catch(error => console.error(error))
    }

    const login = (password, email) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, password, email)

    }

    const signup = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const updateUser = (name,img) => {
        setloading(true)
        updateUser(auth.currentUser, {

            displayName: {name}, photoURL: {img}
          }).then(()=>{
            setNewuser(auth.currentUser)
          })
        
    }
    const logout = () => {
        setloading(true)
        signOut(auth).then(() => {

        })
            .catch(error => console.error(error))
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setNewuser(currentUser)
            setloading(false)
        })
        return ()=>{
            unsubscribe()
        }
    })

    const authInfo = { updateUser,loading, logout, githubSign, googleSignIn, dark, login, setdark, user, setNewuser, signup }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;