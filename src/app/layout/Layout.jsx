import React from "react"
import style from './Layout.module.sass'
import { Outlet } from "react-router-dom"
import { ModalsModule } from "modules/modals"
import { MicroAlert } from "modules/alerts"
import cn from "classnames"

export const Layout = ({
}) => {

    return(
        <div className={cn(style.app, style.mainTheme)}>
            <Outlet/>
            <ModalsModule/>
            <MicroAlert/>
        </div>
    )
}