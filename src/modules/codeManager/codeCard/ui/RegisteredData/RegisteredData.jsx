import React from 'react'
import style from './RegisteredData.module.sass'
import { dateFormatter } from 'shared/dateFormatter'
import { useSelector } from 'react-redux'
import { RegisteredImage } from '../RegisteredImage/RegisteredImage'

export const RegisteredData = ({ data }) => {

    const wrappingTypes = useSelector(store => store.app.data.appData.wrappingTypes)

    const { registrationData, images } = data

    console.log(registrationData, images)

    return(
        <div className={style.scrollable}>
            <div className={style.list}>

                <div className={style.item}>
                    <span>Дата регистрации</span>
                    <span>{dateFormatter(registrationData.regDatetime)}</span>
                </div>

                <div className={style.item}>
                    <span>ФИО</span>
                    <span>{registrationData.fullName}</span>
                </div>

                <div className={style.item}>
                    <span>Автомобиль</span>
                    <span>{registrationData.carName}</span>
                </div>

                <div className={style.item}>
                    <span>Установщик</span>
                    <span>{registrationData.installerName}</span>
                </div>

                <div className={style.item}>
                    <span>Адрес установщика</span>
                    <span>{registrationData.installerAddress}</span>
                </div>

                <div className={style.item}>
                    <span>Контакт установщика</span>
                    <span>{registrationData.installerContact}</span>
                </div>

                <div className={style.item}>
                    <span>Дата установки</span>
                    <span>{dateFormatter(registrationData.wrappingDatetime)}</span>
                </div>

                <div className={style.item}>
                    <span>Тип установки</span>
                    <span>{wrappingTypes.find(el => el.id === registrationData.wrappingType).name}</span>
                </div>

            </div>
            <div className={style.images}>
                {
                    images?.map(img =>
                        <RegisteredImage key={img.id} img={img}/>
                    )
                }
                
                
            </div>
        </div>
    )
}