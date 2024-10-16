import React from "react"
import style from './Layout.module.sass'
import { ReactComponent as NotificationSvg } from 'assets/images/brightness_alert.svg'
import cn from "classnames"
import { SmallDynamicBtn } from "shared/buttons"

export const Layout = ({ message, setIsNoticeOpened, isNoticeOpened, adviceRef }) => {
    return(
        <div className={style.notice}>
            <div className={style.icon} onClick={() => setIsNoticeOpened(prev => !prev)}>
                <NotificationSvg/>
            </div>
            <div ref={adviceRef} className={cn(style.advice, {[style.advice_opened]: isNoticeOpened})}>
                {message}
                <div className={style.btn}>
                    <SmallDynamicBtn onClick={() => setIsNoticeOpened(false)}>
                        Понятно, спасибо
                    </SmallDynamicBtn>
                </div>
            </div>
        </div>
    )
}