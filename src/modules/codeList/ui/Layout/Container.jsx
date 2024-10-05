import React, { useEffect } from "react"
import { Layout } from "./Layout"
import { useSelector } from "react-redux"
import { setListPage, useGetCodesQuery } from "modules/codeList/model"
import { CODE_QUERY_PAGE_LIMIT } from "shared/utils/constants"
import { MainPreloader } from "modules/preloaders"
import style from './Layout.module.sass'

export const Container = () => {

    const filtration = useSelector(store => store.filtration.filtration)
    const currentPage = useSelector(store => store.codeList.data.page)

    const changePage = (page) => {
        setListPage({page})
    }

    const {
        data: codesData, 
        error: codesDataError, 
        isLoading: codesDataIsLoading, 
        refetch: refetchCodesData,
        isFetching: codesDataIsFetching
    } = useGetCodesQuery({
        page: currentPage,
        limit: CODE_QUERY_PAGE_LIMIT,
        status: filtration.status
    })

    useEffect(() => {
        refetchCodesData({
            page: currentPage,
            limit: CODE_QUERY_PAGE_LIMIT,
            status: filtration.status
        })
    }, [filtration.status])

    if(!codesDataIsFetching && codesData) {
        return(
            <Layout
                data={codesData.data}
                />
        )
    } else {
        return(
            <div className={style.preloader}>
                <MainPreloader/>
            </div>
        )
    }
}