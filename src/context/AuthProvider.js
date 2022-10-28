import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase/Firebase.int';
const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setNewuser] = useState(null)
    const [dark, setdark] = useState('white')

    const githubSign = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setNewuser(user)
            })
            .catch(error => console.error(error))

    }

    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setNewuser(user);
            })
            .catch(error => console.error(error))
    }

    const login = (password, email) => {
        return signInWithEmailAndPassword(auth, password, email)

    }

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const updateUser = (name,img) => {
        updateUser(auth.currentUser, {
            displayName: {name}, photoURL: {img}
          }).then(()=>{
            setNewuser(auth.currentUser)
          })
        
    }
    const signOunt = () => {
        signOunt(auth).then(() => {

        })
            .catch(error => console.error(error))
    }

    const authInfo = { updateUser, signOunt, githubSign, googleSignIn, dark, login, setdark, user, setNewuser, signup }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;