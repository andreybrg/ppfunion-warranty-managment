import React from "react"
import { Layout } from "./Layout"
import { useDispatch, useSelector } from "react-redux"
import { resetSearchValue } from "modules/search"
import { Navigate } from "react-router-dom"

export const Container = () => {

    const dispatch = useDispatch()

    const searchValue = useSelector(store => store.search.searchValue)
    const access = useSelector(store => store.app.data.authData.access)

    const resetSearchQuery = () => {
        dispatch(resetSearchValue())
    }

    if(access) {
        return(
            <Layout
                searchValue={searchValue}
                resetSearchQuery={resetSearchQuery}
                />
        )
    } else {
        return <Navigate to={'/access-denied'}/>
    }
}