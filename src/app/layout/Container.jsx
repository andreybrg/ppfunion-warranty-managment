import React from "react"
import { Layout } from "./Layout"
import { useHref } from "react-router-dom"

export const Container = ({ }) => {

    const themeData = {
        theme: 'mainTheme'
    }
    
    const mainThemeRoutes = [
        'panel',
        'auth'
    ]

    const href = useHref()

    if(!mainThemeRoutes.includes(href.split('/')[1])) themeData.theme = 'brandTheme'

    return(
        <Layout
            themeData={themeData}
            />
    )
}