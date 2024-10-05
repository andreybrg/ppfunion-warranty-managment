import React from "react"
import { Layout } from "./Layout"
import { setFiltrationStatus } from "modules/filtration/model"
import { useDispatch, useSelector } from "react-redux"

export const Container = () => {

    const dspatch = useDispatch()
    const filtration = useSelector(store => store.filtration.filtration)

    const onChangeFiltrationByStatus = (status) => {
        dspatch(setFiltrationStatus({status}))
    }

    const filters = [
        {
            methodId: 0,
            name: 'Все'
        },
        {
            methodId: 1,
            name: 'Новые'
        },
        {
            methodId: 2,
            name: 'Активные'
        },
        {
            methodId: 3,
            name: 'Зарегистрированные'
        },
    ]

    return(
        <Layout
            filters={filters}
            filtration={filtration}
            onChangeFiltrationByStatus={onChangeFiltrationByStatus}
            />
    )
}