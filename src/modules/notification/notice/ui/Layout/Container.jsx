import React, { useEffect, useRef, useState } from "react"
import { Layout } from "./Layout"
import { notificationAPI } from "modules/notification/model"

export const Container = ({ message }) => {

    const useQueryStateResult = notificationAPI.endpoints.getCodesNewStatus.useQueryState()
    const [ isNoticeOpened, setIsNoticeOpened ] = useState(false)
    const adviceRef = useRef(null)

    const hendleOutsideClick = (event) => {
        if (!adviceRef.current?.contains(event.target)) {
            setIsNoticeOpened(false)    
        }
    }

    useEffect(() => {

        if(isNoticeOpened) {
            window.addEventListener("mousedown", hendleOutsideClick)
        } else {
            window.removeEventListener("mousedown", hendleOutsideClick)
        }

        return () => {
            window.removeEventListener("mousedown", hendleOutsideClick)
        }

    }, [isNoticeOpened])

    if(useQueryStateResult.data && useQueryStateResult.data.data.length) {
        return(
            <Layout
                message={`Есть коды со статусом «Новый». Не забудьте активировать их.`}
                setIsNoticeOpened={setIsNoticeOpened}
                isNoticeOpened={isNoticeOpened}
                adviceRef={adviceRef}
                />
        )
    } else {
        return(
            null
        )
    }
}