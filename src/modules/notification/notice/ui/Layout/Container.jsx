import React from "react"
import { Layout } from "./Layout"
import { notificationAPI } from "modules/notification/model"

export const Container = ({ message }) => {

    const useQueryStateResult = notificationAPI.endpoints.getCodesNewStatus.useQueryState()

    if(useQueryStateResult.data && useQueryStateResult.data.data.length) {
        return(
            <Layout
                message={`Есть коды со статусом «Новый». Не забудьте активировать их.`}
                />
        )
    } else {
        return(
            null
        )
    }
}