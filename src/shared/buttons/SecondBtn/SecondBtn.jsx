import React from "react"
import style from './SecondBtn.module.sass'
import { Link } from "react-router-dom"

export const SecondBtn = ({ children, icon=null, to=null, newTab=false, ...attributes }) => {

    if(to) {
        return(
            <>
            <Link to={to} className={style.btn} target={newTab ? '_blank' : ''}>
                {icon ? <img src={icon}/> : null}
                <span>{children}</span>
            </Link>
            </>
        )
    } else {
        return(
            <button {...attributes} className={style.btn}>
                {icon ? <img src={icon}/> : null}
                <span>{children}</span>
            </button>
        )
    }
}