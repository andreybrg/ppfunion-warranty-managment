import React from 'react'
import style from './Layout.module.sass'
import { LogOut } from '../../LogOut/LogOut'
import { Notification } from '../../notification'

export const Layout = () => {
    return(
        <div className={style.controls}>
            
            <Notification/>
            <LogOut/>
            
        </div>
    )
}