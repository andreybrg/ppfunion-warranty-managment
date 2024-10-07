import React from 'react'
import style from './Layout.module.sass'
import { InputSearch } from 'shared/fields/InputSearch'

export const Layout = ({
    searchBy,
    onSearchInput,
    searchField,
    onSubmit,
    searchType,
    onChangeSearchType,
}) => {

    return(
        <div className={style.search}>
            <form action="" onSubmit={(event) => onSubmit(event)}>
                <InputSearch
                    id={`panelSearch`}
                    name={`panelSearch`}
                    placeholder={`Поиск...`}
                    searchBy={searchBy}
                    onInput={onSearchInput}
                    inputValue={searchField}
                    selectValue={searchType}
                    onSelectChange={onChangeSearchType}
                    />
                <input type="submit"/>
            </form>
        </div>
    )
}