import React from "react"
import { Layout } from "./Layout"
import { useHref } from "react-router-dom"

export const Container = ({ }) => {

    const themeData = {
        theme: 'mainTheme'
    }

    const href = useHref()

    if(href.split('/')[1] !== 'panel') themeData.theme = 'brandTheme'

    return(
        <Layout
            themeData={themeData}
            />
    )
}