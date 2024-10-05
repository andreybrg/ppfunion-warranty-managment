import React from 'react'
import { useSelector } from 'react-redux'
import cn from 'classnames'
import style from './Layout.module.sass'
import { CODE_STATUS_NAMES } from 'shared/utils/constants'

export const Layout = ({ status }) => {

    const statuses = useSelector(store => store.app.data.appData.codeStatuses)

    return(
        <span className={cn({[style[CODE_STATUS_NAMES[status]]]: true})}>
            {statuses.find(el => el.id === status).name}
        </span>
    )
}