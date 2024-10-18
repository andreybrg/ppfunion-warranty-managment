import React from "react"
import style from './Layout.module.sass'
import { Outlet } from "react-router-dom"
import cn from "classnames"

export const Layout = ({
    themeData
}) => {

    return(
        <div className={cn(style.app, style[themeData.theme])}>
            <Outlet/>
        </div>
    )
}