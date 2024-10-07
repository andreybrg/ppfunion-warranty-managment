import React from "react"
import { PanelModule } from "modules/panel"
import commonStyle from 'assets/styles/common.module.sass'
import { PanelHeaderModule } from "modules/header"

export const Panel = () => {

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
                    <PanelModule/>
                    </div>
                </div>
            </main>
        </>
    )
}