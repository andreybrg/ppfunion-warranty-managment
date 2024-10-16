import React, { useEffect, useState } from "react"
import { Layout } from "./Layout"
import { useGetCodesQuery } from "modules/codeList/model"
import { MainPreloader } from "modules/preloaders"
import style from './Layout.module.sass'
import { withCodesQueryData } from "shared/hoc"

export const Container = ({ queryData }) => {

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

    if(!codesDataIsLoading && codesData) {
        return(
            <Layout
                data={codesData.data}
                totalCount={codesData.totalCount}
                isFetching={codesDataIsFetching}
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