import React from "react"
import style from './Layout.module.sass'
import { SmallDynamicBtn } from "shared/buttons"
export const Layout = ({ filters, filtration, onChangeFiltrationByStatus }) => {

    const currentFiltrationStatus = filtration.status

    return(
        <div className={style.filters}>
            {
                filters.map(el => 
                    <SmallDynamicBtn 
                        key={el.methodId} 
                        isActive={currentFiltrationStatus === el.methodId ? true : false} 
                        onClick={() => onChangeFiltrationByStatus(el.methodId)}
                        >
                        {el.name}
                    </SmallDynamicBtn>
                )
            }
        </div>
    )
}