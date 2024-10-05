import React from 'react'
import style from './Layout.module.sass'
import { MainForm, MainFormMessage } from 'shared/forms'
import { InputNumber } from 'shared/fields'
import { MainBtn } from 'shared/buttons'

export const Layout = ({ formik, codesState, isRequestPending }) => {

    return(
        <MainForm onSubmit={formik.handleSubmit}>
            {codesState.length
            ?
            <MainFormMessage>
                {codesState?.map((el, idx) => <div key={idx}><span>{el}</span></div>)}
            </MainFormMessage>
            :
            null}
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