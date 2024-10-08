import React from 'react'
import { ReactComponent as SearchSvg } from 'assets/images/search.svg'
import style from './Layout.module.sass'

export const Layout = ({
    onSearchOpen
}) => {

    return(
        <button type='button' onClick={() => onSearchOpen()} className={style.btn}>
            <SearchSvg/>
        </button>
    )
}