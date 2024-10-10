import React from "react"
import { Layout } from "./Layout"
import { useDispatch, useSelector } from "react-redux"
import { resetSearchValue } from "modules/search"
import { Navigate } from "react-router-dom"
import { MainPreloader } from "modules/preloaders"
import style from './Layout.module.sass'

export const Container = () => {

    const dispatch = useDispatch()

    const searchValue = useSelector(store => store.search.searchValue)
    const access = useSelector(store => store.app.data.authData.access)
    const isPanelInit = useSelector(store => store.panel.isInit)

    const resetSearchQuery = () => {
        dispatch(resetSearchValue())
    }

    if(access) {
        if(isPanelInit) {
            return(
                <Layout
                    searchValue={searchValue}
                    resetSearchQuery={resetSearchQuery}
                    />
            )
        } else {
            return(
                <div className={style.preloader}>
                    <MainPreloader/>
                </div>
            )
        }
    } else {
        return <Navigate to={'/access-denied'}/>
    }
}