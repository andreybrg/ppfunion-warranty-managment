import React from "react"
import { Layout } from "./Layout"
import { useSelector } from "react-redux"

export const Container = () => {

    const searchValue = useSelector(store => store.search.searchValue)

    return(
        <Layout
            searchValue={searchValue}
            />
    )
}