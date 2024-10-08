import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { appInitialization } from "app"
import { MainPreloader } from "modules/preloaders"
import style from './AppInitialization.module.sass'
import { resizeListener } from "shared/utils/resizeListener"

export const AppInitialization = ({ children }) => {

    const dispatch = useDispatch()
    const isAppInitialized = useSelector(store => store.app.data.isInit)

    useEffect(() => {
        resizeListener()
        dispatch(appInitialization())
    }, [])

    if(isAppInitialized) {
        return(
            children
        )
    } else {
        return(
            <div className={style.preloader}>
                <MainPreloader/>
            </div>
        )
    }
}