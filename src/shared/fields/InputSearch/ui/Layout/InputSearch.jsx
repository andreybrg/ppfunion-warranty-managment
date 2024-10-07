import React from "react"
import cn from 'classnames'
import style from './InputSearch.module.sass'

export const InputSearch = ({ 
    label,
    id,
    name,
    searchBy=[],
    placeholder='',
    formikFieldProps={},
    formikTouched=false,
    formikErrors=null,
    formikSelectProps={},
    onInput,
    inputValue,
    selectValue,
    onSelectChange,
}) => {


    return(
        <label htmlFor={id || name} className={style.label}>
            <div className={style.title}>{label}</div>
            {
                searchBy.length
                ?
                <div className={style.select}>
                    <div className={style.selectContainer}>
                        <select name="" id="" value={selectValue} onChange={(event) => onSelectChange(event.target.value)}>
                        {searchBy.map(el =>
                            <option key={el.id} value={el.id}>{el.name}</option>
                        )}
                        </select>
                    </div>
                </div>
                :
                null
            }
            
            <input
                className={cn(
                    {[style.withSelect]: searchBy.length}
                )}
                {...formikFieldProps}
                value={inputValue}
                onChange={(event) => onInput ? onInput(event.target.value) : null}
                placeholder={placeholder} 
                type={'search'}
                />
            {formikTouched && formikErrors ? <div className={style.fieldError}>{formikErrors}</div> : null}
        </label>
    )
}