import React, { useEffect } from 'react'
import { yandexAuthSuggest } from 'shared/utils/auth/yandex'

export const Layout = () => {

    useEffect(() => {
        yandexAuthSuggest()
    }, [])
    
    return(
        <></>
    )
}