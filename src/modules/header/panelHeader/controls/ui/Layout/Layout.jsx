import React from 'react'
import style from './Layout.module.sass'
import { LogOut } from '../../LogOut/LogOut'
import { Notification } from '../../notification'
import { SearchBtn } from 'modules/search'
import cn from 'classnames'

export const Layout = () => {
    return(
        <div className={style.controls}>

            <div className={cn(
                style.item,
                style.onMobile
            )}>
                <SearchBtn/>
            </div>
            <div className={style.item}>
                <Notification/>
            </div>
            <div className={style.item}>
                <LogOut/>
            </div>
            
        </div>
    )
}