import React from 'react'
import { Layout } from './Layout'
import { useParams } from 'react-router-dom'

export const Container = () => {

    const { code } = useParams()

    document.title = `Код гарантии — ${code}`

    return(
        <Layout
            code={code}
            />
    )
}