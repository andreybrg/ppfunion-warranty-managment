import React, { useContext, useRef } from 'react'
import style from './CodeItem.module.sass'
import cn from 'classnames'
import { ReactComponent as PrintSvg } from 'assets/images/print.svg'
import { ModalsContext } from 'modules/modals'
import { CodeCardModule } from 'modules/codeManager'
import { StatusNameColored } from 'shared/statusName'
import { dateFormatter } from 'shared/dateFormatter'
import { Link } from 'react-router-dom'

export const CodeItem = ({ item }) => {

    const cancelClickRefs = useRef([])

    const { mainModalController } = useContext(ModalsContext)
    
    return(
        <div onClick={
                (event) => {
                    if(!event.target.closest('[data-cancel-click]'))
                        mainModalController.mountMainModal(<CodeCardModule codeId={item.id}/>, item.code)
                }} 
                className={style.item}
                >
            <div className={style.container}>
                {/* <div className={style.date}>
                    Создан {dateFormatter(item.datetime)}
                </div> */}
                <div className={style.code}>
                    {item.code}
                </div>
                <div className={style.status}>
                    <StatusNameColored status={item.status}/>
                </div>
                {
                    item.status === 1
                    ?
                    <Link 
                        to={`/panel/qr/${item.code}`} 
                        target='_blank' 
                        className={style.printBtn} 
                        type="button"
                        ref={el => cancelClickRefs.current.push(el)}
                        data-cancel-click
                        >
                        <PrintSvg/>
                    </Link>
                    :
                    null
                }
            </div>
        </div>
    )
}