import { checkAuthorization, setAuthData } from 'app/model/appSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { yandexAuthSuggest } from 'shared/utils/auth/yandex'

export const Layout = () => {

    const dispatch = useDispatch()

    useEffect(async () => {
        const resp = await yandexAuthSuggest()
        console.log('respdata', resp)
        if(!resp.isError) {
            dispatch(checkAuthorization())
        }
    }, [])
    
    return(
        <></>
    )
}