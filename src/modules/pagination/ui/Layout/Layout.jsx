import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setListPage } from "modules/codeList/model"
import style from './Layout.module.sass'
import { CODE_QUERY_PAGE_LIMIT } from 'shared/utils/constants'
import cn from 'classnames'

export const Layout = ({ totalCount }) => {

    const dispatch = useDispatch()
    const currentPage = useSelector(store => store.codeList.data.page)
    const filtration = useSelector(store => store.filtration.filtration)

    const pagesArray = [...Array(Math.ceil(totalCount / CODE_QUERY_PAGE_LIMIT)+1).keys()]
    pagesArray.shift()

    const pstart = currentPage-3 >= 0 ? currentPage-3 : 0
    const pend = currentPage+1 <= pagesArray.length-1 ? currentPage+1 : pagesArray.length-1
    const showCornerPagination = [0, pagesArray.length-1]

    const mappedPages = pagesArray.map((el, idx) => {
        if(idx >= pstart && idx <= pend || showCornerPagination.includes(idx)) {
            return el
        } else {
            return null
        }
    })

    const paginationArray = mappedPages.reduce((acc, el, idx, arr) => {
        if(arr[idx-1] !== el) {
            acc.push(el)
        }
        return acc
    }, [])

    const setPage = (page) => {
        dispatch(setListPage({page}))
    }

    useEffect(() => {
        setPage(1)
    }, [filtration])

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