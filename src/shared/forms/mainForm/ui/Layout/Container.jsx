import React from "react"
import { Layout } from "./Layout"

export const Container = ({ children, onSubmit }) => {
    return(
        <Layout onSubmit={onSubmit}>
            {children}
        </Layout>
    )
}