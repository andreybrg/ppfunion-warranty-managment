import React from 'react'
import { ReactComponent as LogoutSvg } from 'assets/images/logout.svg'
import style from './LogOut.module.sass'

export const LogOut = ({ onLogOut }) => {
    return(
        <button type='button' onClick={() => onLogOut()} className={style.btn}>
            <LogoutSvg/>
        </button>
    )
}