import React, { useEffect } from 'react'

export const SuggestToken = () => {

    console.log('look at window', window)
    const resp = window.YaSendSuggestToken('https://w.ppfunion.com/auth/signin')
    console.log(resp)

    // useEffect(()=> {
        // if(!document.getElementById("suggest-token-ya")) {
        //     const head = document.getElementsByTagName('head')[0]
        //     const script = document.createElement('script')
        //     console.log(script)
        //     script.setAttribute("id", "suggest-token-ya")
        //     script.src = 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js'
        //     head.appendChild(script)
        // }

        // window.YaSendSuggestToken('https://w.ppfunion.com/auth/signin')

        // return () => {
        //     const toRemove = document.getElementById("suggest-token-ya")
        //     toRemove.remove()
        // }
    // }, [])
    return(
        <></>
    )
}