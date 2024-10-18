import React from "react"
import { Layout } from "./Layout"
import { useHref } from "react-router-dom"

export const Container = () => {

    const themeData = {
        theme: 'mainTheme'
    }
    
    const brandThemeRoutes = [
        'register'
    ]

    const href = useHref()

    const splittedHref = href.split('/')

    if(brandThemeRoutes.includes(splittedHref[1]) || brandThemeRoutes.includes(splittedHref[2])) themeData.theme = 'brandTheme'

    return(
        <Layout
            themeData={themeData}
            />
    )
}