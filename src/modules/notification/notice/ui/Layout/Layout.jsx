import React from "react"
import style from './Layout.module.sass'
import { ReactComponent as NotificationSvg } from 'assets/images/brightness_alert.svg'

export const Layout = ({ message }) => {
    return(
        <div className={style.notice}>
            <div className={style.icon}>
                <NotificationSvg/>
            </div>
            <div className={style.advice}>
                {message}
            </div>
        </div>
    )
}