import React from "react"
import { Layout } from "./Layout"

export const Container = ({ children, isSuccess=false, isError=false }) => {
    return(
        <Layout
            isSuccess={isSuccess}
            isError={isError}
            >
            {children}
        </Layout>
    )
}