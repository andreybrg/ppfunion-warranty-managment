import React from 'react'
import { Layout } from './Layout'
import { withAuth } from 'shared/hoc'
import { logOut } from 'app'
import { useDispatch } from 'react-redux'

export const Container = () => {

    const dispatch = useDispatch()

    const onLogOut = () => {
        dispatch(logOut())
    }

    const LayoutWithAuth = withAuth(Layout)

    return <LayoutWithAuth onLogOut={onLogOut}/>
}