import React from "react"
import style from './Layout.module.sass'
import { Outlet } from "react-router-dom"
import { ModalsModule } from "modules/modals"
import { PanelHeaderModule } from "modules/header"
import { MicroAlert } from "modules/alerts"

export const Layout = ({
}) => {

    return(
        <div className={style.app}>
            <header className={style.header}>
                <div className={style.wrap}>
                    <div className={style.container}>
                        <PanelHeaderModule/>
                    </div>
                </div>
            </header>
            <main className={style.main}>
                <div className={style.wrap}>
                    <div className={style.container}>
                        <Outlet/>
                    </div>
                </div>
            </main>
            <ModalsModule/>
            <MicroAlert/>
        </div>
    )
}