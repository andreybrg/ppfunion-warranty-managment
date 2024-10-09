import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {

    const isAuthorized = useSelector(store => store.app.data.authData.isAuth)
    
    if(!isAuthorized) {
        return(
            <Navigate to={'/auth/signin'}/>
        )
    } else {
        return(
            children
        )
    }
}