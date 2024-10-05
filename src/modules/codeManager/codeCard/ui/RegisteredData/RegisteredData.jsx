import React from 'react'
import style from './RegisteredData.module.sass'
import { dateFormatter } from 'shared/dateFormatter'
import { useSelector } from 'react-redux'

export const RegisteredData = ({ data }) => {

    const wrappingTypes = useSelector(store => store.app.data.appData.wrappingTypes)

    return(
        <div className={style.scrollable}>
            <div className={style.list}>

                <div className={style.item}>
                    <span>Дата регистрации</span>
                    <span>{dateFormatter(data.regDatetime)}</span>
                </div>

                <div className={style.item}>
                    <span>ФИО</span>
                    <span>{data.fullName}</span>
                </div>

                <div className={style.item}>
                    <span>Автомобиль</span>
                    <span>{data.carName}</span>
                </div>

                <div className={style.item}>
                    <span>Установщик</span>
                    <span>{data.installerName}</span>
                </div>

                <div className={style.item}>
                    <span>Адрес установщика</span>
                    <span>{data.installerAddress}</span>
                </div>

                <div className={style.item}>
                    <span>Контакт установщика</span>
                    <span>{data.installerContact}</span>
                </div>

                <div className={style.item}>
                    <span>Дата установки</span>
                    <span>{dateFormatter(data.wrappingDatetime)}</span>
                </div>

                <div className={style.item}>
                    <span>Тип установки</span>
                    <span>{wrappingTypes.find(el => el.id === data.wrappingType).name}</span>
                </div>

            </div>
        </div>
    )
}