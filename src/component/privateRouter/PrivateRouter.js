import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import  { AuthContext } from '../../context/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed
         border-sky-400 rounded-full animate-spin dark:border-violet-400"></div>
    }
    if (!user) {
        return <Navigate to='/login' state={{form:location}} replace></Navigate>
    }
    return children;
   
};

export default PrivateRouter;