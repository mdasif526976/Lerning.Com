import React, { createContext, useState } from 'react';
export const  AuthContext = createContext();

const AuthProvider = ({children}) => {
     const [dark,setdark] = useState('white')
    const authInfo = {dark,setdark}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;