import React, { useRef } from "react"
import style from './InputDate.module.sass'
import { ReactComponent as DatePickerSvg } from 'assets/images/calendar_month.svg'
import { DateSchema } from "yup"
export const InputDate = ({ 
    label,
    id,
    name,
    placeholder='',
    formikFieldProps={},
    formikTouched=false,
    formikErrors=null,
    disabled
}) => {

    return(
        <label htmlFor={id || name} className={style.label}>
            <div className={style.title}>{label}</div>
            <input
                {...formikFieldProps}
                placeholder={placeholder} 
                type={'date'}
                max="3000-01-01"
                disabled={disabled}
                />
            <div className={style.dateCloneField} disabled={disabled}>
                {formikFieldProps.value ? formikFieldProps.value : 'Выберите дату...'}
            </div>
            <div className={style.date} disabled={disabled}>
                <DatePickerSvg/>
            </div>
            {formikTouched && formikErrors ? <div className={style.fieldError}>{formikErrors}</div> : null}
        </label>
    )
}