import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { authUser } = useAuthContext();

    if (!authUser) {
      // If not authenticated, redirect to login
      return <Navigate to="/login" />;
    }
  
  return children
}

export default PrivateRoute
