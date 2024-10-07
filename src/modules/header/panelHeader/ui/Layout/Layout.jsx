import React from "react"
import style from './Layout.module.sass'
import { ReactComponent as Logo } from 'assets/images/panel_logo.svg'
import { Controls } from "../../controls"
import { SearchModule } from "modules/search"

export const Layout = () => {

    return(
        <div className={style.header}>
            <div className={style.logo}>
                <Logo />
            </div>
            <SearchModule/>
            <Controls />
        </div>
    )
}