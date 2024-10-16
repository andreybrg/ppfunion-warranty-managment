import React from "react"
import style from './Layout.module.sass'
import { CodeItem } from "../CodeItem/CodeItem"
import { PaginationModule } from "modules/pagination"
import cn from "classnames"

export const Layout = ({ data, totalCount, isFetching }) => {

    return(
        <>
            <div className={cn(style.list, {[style.fetching]: isFetching})}>
                {
                    data.length
                    ?
                    data.map(el=>
                        <CodeItem
                            key={el.id}
                            item={el}
                        />
                    )
                    :
                    <div className={style.empty}>
                        Ничего не найдено
                    </div>
                }
            </div>
            <PaginationModule totalCount={totalCount}/>
        </>
    )
}