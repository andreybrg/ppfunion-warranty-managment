import React from "react"
import style from './Layout.module.sass'
import { Outlet } from "react-router-dom"
import { ModalsModule } from "modules/modals"
import { MicroAlert } from "modules/alerts"
import cn from "classnames"

export const Layout = ({
    themeData
}) => {

    return(
        <div className={cn(style.app, style[themeData.theme])}>
            <Outlet/>
            <ModalsModule/>
            <MicroAlert/>
        </div>
    )
}