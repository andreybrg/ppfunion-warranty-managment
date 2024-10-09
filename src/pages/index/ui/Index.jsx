import React from 'react'
import { PanelHeaderModule } from 'modules/header'
import commonStyle from 'assets/styles/common.module.sass'
import style from './Index.module.sass'
import { YandexAuthModule } from 'modules/authorization'
import bgImagePng from 'assets/images/g34.png'
import { useDispatch } from 'react-redux'
import { setAuthData } from 'app/model/appSlice'

export const Index = () => {

    return(
        <>
        <div className={style.page}>
            <div className={style.formContainer}>
                <div className={style.form}>
                    <h2 className={style.title}>
                        Вход в панель управления для адинистраторов
                    </h2>
                    <div className={style.authBtn} id={'auth-ya-btn'}></div>
                </div>
            </div>
        </div>
        <div className={style.pageBackGround}>
            <img src={bgImagePng} alt="" />
        </div>
        <YandexAuthModule/>
        </>
    )
}