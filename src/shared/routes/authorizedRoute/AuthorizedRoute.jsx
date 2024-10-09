import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const AuthorizedRoute = ({ children }) => {

    const isAuthorized = useSelector(store => store.app.data.authData.isAuth)
    
    const retunComponent = children ? children : <Outlet/>

    if(isAuthorized) {
        return(
            <Navigate to={'/panel'}/>
        )
    } else {
        return(
            retunComponent
        )
    }
}