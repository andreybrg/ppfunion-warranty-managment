import React from "react"
import style from './MainBtn.module.sass'

export const MainBtn = ({ children, ...attributes }) => {
    return(
        <button {...attributes} className={style.btn}>
            <span>{children}</span>
        </button>
    )
}