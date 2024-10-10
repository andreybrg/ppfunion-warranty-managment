import React from "react"
import { Layout } from "./Layout"
import { useHref } from "react-router-dom"

export const Container = ({ }) => {

    const themeData = {
        theme: 'mainTheme'
    }
    
    const mainThemeRoutes = [
        'panel',
        'auth',
        'access-denied'
    ]

    const href = useHref()

    const splittedHref = href.split('/')

    if(!mainThemeRoutes.includes(splittedHref[1]) && splittedHref[1]) themeData.theme = 'brandTheme'

    return(
        <Layout
            themeData={themeData}
            />
    )
}