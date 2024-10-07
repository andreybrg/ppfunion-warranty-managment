import React from 'react'
import { MainForm } from 'shared/forms'
import { InputNumber } from 'shared/fields'
import { MainBtn } from 'shared/buttons'

export const Layout = ({ formik, isRequestPending }) => {

    return(
        <MainForm onSubmit={formik.handleSubmit}>
            <InputNumber
                label={'Сколько кодов сгенерировать'}
                id={'codesQtt'}
                name={'codesQtt'}
                formikFieldProps={{...formik.getFieldProps('codesQtt')}}
                formikTouched={formik.touched.codesQtt}
                formikErrors={formik.errors.codesQtt}
                />
                <MainBtn disabled={isRequestPending} type="submit">
                    Сгенерировать
                </MainBtn>
        </MainForm>
    )
}