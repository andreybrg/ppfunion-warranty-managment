import React from "react"
import style from './InputNumber.module.sass'

export const InputNumber = ({ 
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
                type={'number'}
                disabled={disabled}
                />
            {formikTouched && formikErrors ? <div className={style.fieldError}>{formikErrors}</div> : null}
        </label>
    )
}