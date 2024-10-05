import React from "react"
import style from './InputText.module.sass'

export const InputText = ({ 
    label,
    id,
    name,
    placeholder='',
    formikFieldProps={},
    formikTouched=false,
    formikErrors=null,
}) => {


    return(
        <label htmlFor={id || name} className={style.label}>
            <div className={style.title}>{label}</div>
            <input 
                {...formikFieldProps}
                placeholder={placeholder} 
                type={'text'}
                />
            {formikTouched && formikErrors ? <div className={style.fieldError}>{formikErrors}</div> : null}
        </label>
    )
}