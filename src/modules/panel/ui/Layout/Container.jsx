import React from "react"
import { Layout } from "./Layout"
import { useDispatch, useSelector } from "react-redux"
import { resetSearchValue } from "modules/search"

export const Container = () => {

    const dispatch = useDispatch()

    const searchValue = useSelector(store => store.search.searchValue)

    const resetSearchQuery = () => {
        dispatch(resetSearchValue())
    }

    return(
        <Layout
            searchValue={searchValue}
            resetSearchQuery={resetSearchQuery}
            />
    )
}