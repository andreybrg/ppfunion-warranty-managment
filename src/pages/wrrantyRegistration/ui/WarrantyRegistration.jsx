import React from "react"
import style from './WarrantyRegistration.module.sass'
import commonStyle from 'assets/styles/common.module.sass'
import { WarrantyRegForm } from "modules/warrantyRegistration"
import { MainHeaderModule } from "modules/header"
import cn from "classnames"

export const WarrantyRegistration = () => {

    return(
        <>
        <div className={style.page}>
            <header className={cn(commonStyle.header, commonStyle.header_fixed)}>
                <div className={commonStyle.wrap}>
                    <div className={commonStyle.container}>
                        <MainHeaderModule/>
                    </div>
                </div>
            </header>
            <main className={commonStyle.main}>
                <div className={commonStyle.wrap}>
                    <div className={commonStyle.container}>
                        <WarrantyRegForm/>
                    </div>
                </div>
            </main>
        </div>
        <div className={style.pageBackGround}></div>
        </>
    )
}