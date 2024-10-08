import React from 'react'
import cn from 'classnames'
import style from './Layout.module.sass'
import { InputSearch } from 'shared/fields/InputSearch'

export const Layout = ({
    isOnMobileOpened,
    searchBy,
    onSearchInput,
    searchField,
    onSubmit,
    searchType,
    onChangeSearchType,
    onSearchOutsideClick,
}) => {

    return(
        <div onClick={(event) => onSearchOutsideClick(event)} className={cn(
                style.search,
                {[style.onMobileOpened] : isOnMobileOpened}
            )}>
            <form data-search action="" onSubmit={(event) => onSubmit(event)}>
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