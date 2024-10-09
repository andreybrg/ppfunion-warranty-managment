import React from "react"
import { Layout } from "./Layout"
import { withAuth } from "shared/hoc"

export const Container = () => {

    const LayoutWithAuth = withAuth(Layout)

    return <LayoutWithAuth/>
}