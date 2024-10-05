import React from 'react'
import { ReactComponent as LogoutSvg } from 'assets/images/logout.svg'
import style from './LogOut.module.sass'

export const LogOut = () => {
    return(
        <button type='button' className={style.btn}>
            <LogoutSvg/>
        </button>
    )
}