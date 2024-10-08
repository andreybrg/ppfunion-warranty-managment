import React from "react"
import style from './Layout.module.sass'
import { FiltrationModule } from "modules/filtration"
import { CodeListModule } from "modules/codeList"
import { CodeGenerationBtn } from "modules/codeGenerator"

export const Layout = ({ searchValue, resetSearchQuery }) => {
    return(
        <div className={style.panel}>
            <FiltrationModule/>
            <div className={style.chips}>
                {searchValue
                    ? 
                    <div onClick={() => resetSearchQuery()} className={style.chipItem}>
                        Поиск: {searchValue}
                        <div className={style.resetChip}></div>
                    </div> 
                    : null}
            </div>
            <CodeListModule/>
            <CodeGenerationBtn/>
        </div>
    )
}