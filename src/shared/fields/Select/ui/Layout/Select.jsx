import React from "react"
import style from './Select.module.sass'

export const Select = ({ 
    label,
    disabledText,
    id,
    name,
    options,
    onChangeFunction,
    fieldProps={},
    formikTouched=false,
    formikErrors=null,
    disabled
}) => {

    return(
        <label htmlFor={id || name} className={style.label} onChange={onChangeFunction ? (event) => onChangeFunction(event.target.value) : null}>
            <div className={style.title}>{label}</div>
            <select {...fieldProps} disabled={disabled}>
                <option disabled value="0" key={0}>{disabledText}</option>
                {
                    options?.map(el => 
                        <option key={el.id} value={el.id}>{el.name}</option>
                    )
                }
            </select>
            {formikTouched && formikErrors ? <div className={style.fieldError}>{formikErrors}</div> : null}
        </label>


    )
}