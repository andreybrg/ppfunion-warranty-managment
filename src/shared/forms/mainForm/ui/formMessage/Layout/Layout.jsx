import React from "react"
import style from './Layout.module.sass'
import cn from 'classnames'

export const Layout = ({ children, isSuccess, isError }) => {
    return(
        <div className={cn(
            style.message,
            {[style.message_success]:isSuccess},
            {[style.message_error]:isError},
            )}>
            {children}
        </div>
    )
}