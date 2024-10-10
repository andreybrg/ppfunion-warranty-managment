import React, { useState } from 'react'
import commonStyle from 'assets/styles/common.module.sass'
import style from './AccessDenied.module.sass'
import { SecondBtn } from 'shared/buttons'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from 'app'
import { useNavigate } from 'react-router-dom'
import { accessRequest } from 'app/model/appSlice'
import { setNewMicroalert } from 'modules/alerts'

export const AccessDenied = () => {

    const [ isAccessRequested, setIsAccessRequested ] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(store => store.app.data.authData.isAuth)

    const onLogOut = () => {
        dispatch(logOut())
        navigate('/')
    }

    const onAccessRequest = () => {
        dispatch(accessRequest())
        setIsAccessRequested(true)
        dispatch(setNewMicroalert({text: 'Запрос на доступ отправлен'}))
    }

    return(
        <>
            <main className={commonStyle.main}>
                <div className={commonStyle.wrap}>
                    <div className={commonStyle.container}>
                        <div className={style.accessDenied}>
                            Доступ запрещён
                            {isAuth
                            ?
                            <>
                                <SecondBtn onClick={() => onLogOut()}>
                                    Выход
                                </SecondBtn>
                                {!isAccessRequested
                                    ?
                                    <SecondBtn onClick={() => onAccessRequest()}>
                                        Запросить доступ
                                    </SecondBtn>
                                    :
                                    <SecondBtn disabled={true}>
                                        Запрос успешно отправлен
                                    </SecondBtn>
                                }
                                
                            </>
                            :
                            null}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}