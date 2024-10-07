import React, { useContext, useState }  from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { genCode } from 'shared/utils/genCode'
import { addNewCodes } from './../../../model'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from './Layout'
import { ModalsContext } from 'modules/modals'
import { setNewMicroalert } from 'modules/alerts'

export const Container = () => {

    const { centeredModalController } = useContext(ModalsContext)

    const dispatch = useDispatch()
    const isRequestPending = useSelector(store => store.codeGenerator.codeAdding.isPending)

    const formik = useFormik({
        initialValues: {
            codesQtt: ''
        },
        validationSchema: Yup.object({
            codesQtt: Yup.number()
                .positive("Кодов должно быть больше 0")
                .integer("Только целое число")
                .required("Введите число кодов"),
        }),
        onSubmit: ({ codesQtt }) => {
            const codes = genCode(codesQtt)
            dispatch(addNewCodes({ codes: codes }))
            dispatch(setNewMicroalert({text: 'Новые коды гарантии успешно сгененрированы'}))
            centeredModalController.unmountCenteredModal()
        }
    })


    return(
        <Layout
            formik={formik}
            isRequestPending={isRequestPending}
            />
    )
}