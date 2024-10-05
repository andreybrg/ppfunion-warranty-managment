import React from 'react'
import style from './Layout.module.sass'
import { NoticeModule } from 'modules/notification'

export const Layout = () => {
    return(
        <div className={style.notification}>
            <NoticeModule message={'asdasd'}/>
        </div>
    )
}