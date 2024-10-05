import React from "react"
import style from './SmallDynamicBtn.module.sass'
import cn from "classnames"

export const SmallDynamicBtn = ({ children, isActive=false, ...attributes }) => {
    return(
        <button {...attributes} className={
                    cn(
                        style.btn,
                        {[style.btn_active]: isActive}
                    )
                }>
                <div className={style.container}>
                    <span>{children}</span>
                </div>
        </button>
    )
}