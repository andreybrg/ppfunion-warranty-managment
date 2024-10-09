import React from 'react'
import commonStyle from 'assets/styles/common.module.sass'
import { PanelHeaderModule } from 'modules/header'
import { YandexAuthModule } from 'modules/authorization'

export const SignIn = () => {
    return(
        <>
            <header className={commonStyle.header}>
                <div className={commonStyle.wrap}>
                    <div className={commonStyle.container}>
                        <PanelHeaderModule/>
                    </div>
                </div>
            </header>
            <main className={commonStyle.main}>
                <div className={commonStyle.wrap}>
                    <div className={commonStyle.container}>
                        <YandexAuthModule/>
                    </div>
                </div>
            </main>
        </>
    )
}