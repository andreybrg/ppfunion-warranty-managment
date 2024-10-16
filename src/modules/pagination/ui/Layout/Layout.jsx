import React from 'react'
import style from './Layout.module.sass'
import cn from 'classnames'

export const Layout = ({ paginationArray, setPage, currentPage }) => {

    return(
        <div className={style.pagination}>
            {paginationArray.map((el, idx) =>
                el
                ?
                <button type='button' 
                    onClick={() => setPage(el)}
                    key={idx} 
                    className={cn(
                        style.item, 
                        {[style.current]: el===currentPage ? true : false}
                    )}>
                    {el}
                </button>
                :
                <div className={style.spread} key={idx}>
                    ...
                </div>
            )}
        </div>
    )
}