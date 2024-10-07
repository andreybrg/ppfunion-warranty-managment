import React from "react"
import { ReactComponent as LogoSvg } from 'assets/images/brand_logo.svg'
import { ReactComponent as CallSvg } from 'assets/images/call.svg'
import style from './Layout.module.sass'
import commonStyle from 'assets/styles/common.module.sass'

export const Layout = () => {
    return(
        <div className={style.header}>
            <div className={commonStyle.wrap}>
                <div className={commonStyle.container}>
                    <div className={style.headerContent}>
                        <div className={style.logo}>
                            <LogoSvg />
                        </div>
                        <div className={style.controls}>
                            <a href="tel:79995808585" className={style.controlsItem}>
                                <div className={style.bigText}>
                                    <CallSvg/>
                                    <span>+7 (999) 580-85-85</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}