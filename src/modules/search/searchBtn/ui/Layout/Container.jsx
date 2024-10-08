import React from 'react'
import { Layout } from './Layout'
import { toggleOnMobileOpened } from 'modules/search/model'
import { useDispatch } from 'react-redux'

export const Container = () => {

    const dispatch = useDispatch()

    const onSearchOpen = () => {
        dispatch(toggleOnMobileOpened())
    }

    return(
        <Layout
            onSearchOpen={onSearchOpen}
            />
    )
}