import { checkAuthorization } from 'app/model/appSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { yandexAuthSuggest } from 'shared/utils/auth/yandex'

export const Layout = () => {

    const dispatch = useDispatch()

    const suggestion = async () => {
        const resp = await yandexAuthSuggest()
        debugger
        console.log('respdata', resp)
        if(!resp.isError) {
            dispatch(checkAuthorization({token: resp.data.access_token}))
        }
    }

    useEffect( () => {
        suggestion()
    }, [])
    
    return(
        <></>
    )
}