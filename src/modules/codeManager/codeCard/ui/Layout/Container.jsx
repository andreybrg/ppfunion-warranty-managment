import React from 'react'
import { Layout } from './Layout'
import { useGetCodeDataQuery } from '../../model/codeCardAPI'
import { doCodeActivation } from '../../model'
import { useDispatch, useSelector } from 'react-redux'
import { MainPreloader } from 'modules/preloaders'
import style from './Layout.module.sass'

export const Container = ({ codeId }) => {

    const dispatch = useDispatch()

    const {
        data: codeData, 
        error: codeDataError, 
        isLoading: codeDataIsLoading, 
        refetch: refetchCodeData,
        isFetching: codeDataIsFetching
    } = useGetCodeDataQuery({
        id: codeId
    })

    const isCodeActivationPending = useSelector(store => store.codeCard.codeActivation.isPending)

    const handleCodeActivation = async (id) => {
        await dispatch(doCodeActivation({id}))
    }

    if(!codeDataIsFetching && codeData) {
        return(
            <Layout
                data={codeData.data}
                codeId={codeId}
                activateCode={handleCodeActivation}
                isCodeActivationPending={isCodeActivationPending}
                />
        )
    } else {
        return(
            <div className={style.preloader}>
                <MainPreloader/>
            </div>
        )
    }
}