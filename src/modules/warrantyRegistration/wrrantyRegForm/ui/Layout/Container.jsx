import React, { useEffect, useState } from 'react'
import { Layout } from './Layout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toBase64 } from 'shared/utils/toBase64'
import { registerCode } from 'modules/warrantyRegistration'

export const Container = () => {

    const dispatch = useDispatch()
    const { code } = useParams()
    const isRequestPending = false
    const wrappingTypes = useSelector(store => store.app.data.appData.wrappingTypes)
    const regState = useSelector(store => store.warrantyRegistration.codeRegistration)
    
    const [photoFiles, setPhotoFiles] = useState([])
    const [photoRenderedFiles, setPhotoRenderedFiles] = useState([])

    const onChangePhotoFilesInput = (e) => {
        setPhotoFiles(prev => {
            const newFiles = []
            Object.values(e.target.files).forEach((val)=>{
                newFiles.push(val)
            })
            return [
                ...prev,
                ...newFiles
            ]   
        })
    }

    const onDeletePhoto = (itemIndex) => {
        setPhotoFiles(
            photoFiles.filter((el, index) => index !== itemIndex)
        )
    }

    const mapBase64ToRender = async () => {
        let data = await Promise.all(photoFiles.map(async (el, index) => {
            let base64Blob = await toBase64(el)
            return {index, blob: base64Blob}
        }))
        setPhotoRenderedFiles(data)
    }

    const formik = useFormik({
        initialValues: {
            code: code ? code : '',
            fullName: '',
            carName: '',
            installerName: '',
            installerAddress: '',
            installerContact: '',
            wrappingType: 0,
            wrappingDatetime: '',
            photoLength: photoFiles.length
        },
        validationSchema: Yup.object({
            code: Yup.string()
                .required("Введите код гарантии"),
            fullName: Yup.string()
                .required("Введите ФИО"),
            carName: Yup.string()
                .required("Введите название автомобиля"),
            installerName: Yup.string()
                .required("Введите название установщика"),
            installerAddress: Yup.string()
                .required("Введите адрес установщика"),
            installerContact: Yup.string()
                .required("Введите контактный телефон установщика"),
            wrappingType: Yup.number()
                .positive("Выберите тип оклейки"),
            wrappingDatetime: Yup.date()
                .required("Введите дату оклейки"),
            photoLength: Yup.number()
                .min(1,'Загрузите хотя бы одно фото')
        }),
        onSubmit: (values) => {
            const formData = new FormData()
            photoFiles.forEach((el, index) => {
                formData.append(index, el, 'photo-'+el.name)
            })
            Object.keys(values).forEach(el =>
                formData.append(el, values[el])
            )
            dispatch(registerCode({code: values.code, formData: formData}))
        }
    })

    useEffect( () => {
        formik.setFieldValue('photoLength', photoFiles.length)
        mapBase64ToRender()
    }, [photoFiles])


    return(
        <Layout
            regState={regState}
            formik={formik}
            isRequestPending={isRequestPending}
            code={code || null}
            wrappingTypes={wrappingTypes}
            photoRenderedFiles={photoRenderedFiles}
            onDeletePhoto={onDeletePhoto}
            onChangePhotoFilesInput={onChangePhotoFilesInput}
            />
    )
}