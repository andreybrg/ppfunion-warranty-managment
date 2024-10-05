import React, { useState } from 'react'
import { Layout } from './Layout'
import { setSearchValue } from 'modules/search/model'
import { useDispatch } from 'react-redux'

export const Container = () => {

    const dispatch = useDispatch()
    const [ searchField, seSearchField ] = useState('')

    const searchBy = [
        {id: 1, name: 'По коду'},
        {id: 2, name: 'По ФИО'},
    ]

    const onSearchInput = (val) => {
        seSearchField(prev=>val)
    }

    const onSearchSubmit = (e) => {
        e.preventDefault()
        dispatch(setSearchValue({value: searchField}))
    }
    
    // setSearchBy
    
    return(
        <Layout
            searchBy={searchBy}
            onSearchInput={onSearchInput}
            searchField={searchField}
            onSubmit={onSearchSubmit}
            />
    )
}