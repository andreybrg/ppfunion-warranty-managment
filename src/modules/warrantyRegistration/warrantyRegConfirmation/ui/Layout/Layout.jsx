import React from 'react'
import style from './Layout.module.sass'
import { MainBtn, SecondBtn } from 'shared/buttons'
import { dateFormatter } from 'shared/dateFormatter'

export const Layout = ({ formikValues, onClosePresubmit, onSubmit, wrappingTypes, isPending }) => {

    const fieldNames = {
        carName: "Название автомобиля",
        code: "Код гарантии",
        fullName: "ФИО",
        installerAddress: "Адрес установщика плёнки",
        installerContact: "Контактный телефон установщика плёнки",
        installerName: "Название установщика плёнки",
        photoLength: "Загружено фотографий",
        wrappingDatetime: "Дата оклейки",
        wrappingType: "Тип оклейки"
    }
    
    const fieldValues = {
        carName: formikValues['carName'],
        code: formikValues['code'],
        fullName: formikValues['fullName'],
        installerAddress: formikValues['installerAddress'],
        installerContact: formikValues['installerContact'],
        installerName: formikValues['installerName'],
        photoLength: formikValues['photoLength'],
        wrappingDatetime: dateFormatter(formikValues['wrappingDatetime']),
        wrappingType: wrappingTypes.find(wt => wt.id == formikValues['wrappingType']).name
    }

    return(
        <>
            <div className={style.undertitle}>
                Проверьте информацию ещё раз. Если где-то допущена ошибка, можно вернуться и исправить.
            </div>
            <div className={style.fieldContent}>
                {
                    Object.keys(formikValues).map((el, idx) =>
                        <div key={idx} className={style.presetField}>
                            <div className={style.title}>{fieldNames[el]}</div>
                            <div className={style.field}>
                                {fieldValues[el]}
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={style.btns}>
                <MainBtn disabled={isPending} onClick={() => onSubmit()}>
                    Всё верно
                </MainBtn>
                <SecondBtn onClick={() => onClosePresubmit()}>
                    Вернуться
                </SecondBtn>
            </div>
        </>
    )
}