import React from "react"
import { ReactComponent as PrintToStockSvg } from 'assets/images/print_to_stock.svg'
import { ReactComponent as StockToReg } from 'assets/images/stock_to_reg.svg'
import { RegisteredData } from "../RegisteredData/RegisteredData"
import style from './Content.module.sass'

export const Content = ({ registrationData, status }) => {

    if(status === 1) {
        return(
            <div className={style.image}>
                <PrintToStockSvg/>
            </div>
        )
    }

    if(status === 2) {
        return(
            <div className={style.image}>
                <StockToReg/>
            </div>
        )
    }

    if(status === 3) {
        return(
            <RegisteredData data={registrationData}/>
        )
    }
}