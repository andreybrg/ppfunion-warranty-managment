import React from 'react'
import commonStyle from 'assets/styles/common.module.sass'
import style from './AccessDenied.module.sass'
import { SecondBtn } from 'shared/buttons'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from 'app'
import { useNavigate } from 'react-router-dom'

export const AccessDenied = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(store => store.app.data.authData.isAuth)

    const onLogOut = () => {
        dispatch(logOut())
        navigate('/')
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