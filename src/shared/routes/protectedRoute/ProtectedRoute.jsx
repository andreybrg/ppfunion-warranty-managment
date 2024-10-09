import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {

    const isAuthorized = useSelector(store => store.app.data.authData.isAuth)
    
    if(!isAuthorized) {
        return(
            <Navigate to={'/'}/>
        )
    } else {
        return(
            children?children:<Outlet/>
        )
    }
}