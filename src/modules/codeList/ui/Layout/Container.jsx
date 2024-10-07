import React, { useEffect } from "react"
import { Layout } from "./Layout"
import { setListPage, useGetCodesQuery } from "modules/codeList/model"
import { MainPreloader } from "modules/preloaders"
import style from './Layout.module.sass'
import { withCodesQueryData } from "shared/hoc"

export const Container = ({ queryData }) => {

    const changePage = (page) => {
        setListPage({page})
    }

    const {
        data: codesData, 
        error: codesDataError, 
        isLoading: codesDataIsLoading, 
        refetch: refetchCodesData,
        isFetching: codesDataIsFetching
    } = useGetCodesQuery(queryData)

    useEffect(() => {
        refetchCodesData(queryData)
    }, [queryData.status])

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

export const withCodesQueryDataContainer = withCodesQueryData(Container)