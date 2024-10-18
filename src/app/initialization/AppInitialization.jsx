import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { appInitialization } from "app"
import { MainPreloader } from "modules/preloaders"
import style from './AppInitialization.module.sass'

export const AppInitialization = ({ children }) => {

    const dispatch = useDispatch()
    const isAppInitialized = useSelector(store => store.app.data.isInit)
    const isAppInitError = useSelector(store => store.app.data.isInitError)

    useEffect(() => {
        dispatch(appInitialization())
    }, [])

    if(isAppInitialized && !isAppInitError) {
        return(
            children
        )
    } else if(!isAppInitialized) {
        return(
            <div className={style.preloader}>
                <MainPreloader/>
            </div>
        )
    } else if(isAppInitialized && isAppInitError) {
        return(
            <div className={style.initError}>
                Ошибка инициализации приложения
            </div>
        )
    }
}