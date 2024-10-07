import React, { useEffect, useState } from 'react'
import { Layout } from './Layout'
import { setSearchType, setSearchValue } from 'modules/search/model'
import { useDispatch, useSelector } from 'react-redux'

export const Container = () => {

    const dispatch = useDispatch()

    const searchData = useSelector(store => store.search)
    const searchTypes = useSelector(store => store.app.data.appData.searchTypes)

    const [ searchField, seSearchField ] = useState(searchData.searchValue)
    const [ searchTypeField, setSearchTypeField ] = useState(searchData.searchType)

    const onSearchInput = (val) => {
        seSearchField(prev=>val)
    }

    const onSearchSubmit = (e) => {
        e.preventDefault()
        dispatch(setSearchValue({value: searchField}))
        dispatch(setSearchType({value: searchTypeField}))
    }    

    const onChangeSearchType = (val) => {
        setSearchTypeField(prev=>val)
    }

    useEffect(() => {
        if(searchData.searchValue === '')
            seSearchField('')
    }, [searchData.searchValue])
    
    return(
        <Layout
            searchBy={searchTypes}
            onSearchInput={onSearchInput}
            searchField={searchField}
            onSubmit={onSearchSubmit}
            searchType={searchTypeField}
            onChangeSearchType={onChangeSearchType}
            />
    )
}