import React, { useEffect, useState } from 'react'
import style from './Layout.module.sass'
import { MainBtn } from 'shared/buttons'
import { InputDate, InputText, Select } from 'shared/fields'
import { MainForm, MainFormMessage } from 'shared/forms'
import { ReactComponent as AddPhoto } from 'assets/images/add_a_photo.svg'
import { ReactComponent as DeletePhoto } from 'assets/images/delete.svg'

export const Layout = ({ 
    regState,
    formik,
    code,
    wrappingTypes,
    photoRenderedFiles,
    onDeletePhoto,
    onChangePhotoFilesInput,
}) => {

    return(
        <div className={style.container}>
            
            <h1 className={style.title}>
                {!regState.isSuccess ? 'Регистрация гарантии' : 'Гарантия успешно зарегистрирована'}
            </h1>
            <div className={style.undertitle}>
                {!regState.isSuccess
                ?
                'Зарегистрировав гарантийный код вы получаете официальную гарантию от производителя плёнки. Подробнее о гарантии можно прочитать здесь' 
                :
                'Зарегистрировав гарантийный код вы получаете официальную гарантию от производителя плёнки. Подробнее о гарантии можно прочитать здесь'}
            </div>

            {!regState.isSuccess
            ?
            <MainForm onSubmit={formik.handleSubmit}>
                {
                    regState.isError
                    ?
                    <MainFormMessage isError={true}>
                        {regState.resultMessage}
                    </MainFormMessage>
                    :
                    null
                }
                {code
                    ?
                    <div className={style.presetField}>
                        <div className={style.title}>Гарантийный код</div>
                        <div className={style.field}>{code}</div>
                    </div>
                    :
                    <InputText
                        label={'Код гарантии'}
                        id={'code'}
                        name={'code'}
                        formikFieldProps={{...formik.getFieldProps('code')}}
                        formikTouched={formik.touched.code}
                        formikErrors={formik.errors.code}
                        placeholder={'XXXXXXXXXX'}
                        />
                }
                <InputText
                    label={'ФИО'}
                    id={'fullName'}
                    name={'fullName'}
                    formikFieldProps={{...formik.getFieldProps('fullName')}}
                    formikTouched={formik.touched.fullName}
                    formikErrors={formik.errors.fullName}
                    placeholder={'Фамилия Имя Отчество'}
                    />
                <Select
                    label={'Тип оклейки'}
                    disabledText={'Выберите тип оклейки'}
                    id={'wrappingType'}
                    name={'wrappingType'}
                    options={wrappingTypes}
                    fieldProps={{...formik.getFieldProps('wrappingType')}}
                    formikTouched={formik.touched.wrappingType}
                    formikErrors={formik.errors.wrappingType}
                    />
                <InputDate
                    label={'Дата оклейки'}
                    id={'wrappingDatetime'}
                    name={'wrappingDatetime'}
                    formikFieldProps={{...formik.getFieldProps('wrappingDatetime')}}
                    formikTouched={formik.touched.wrappingDatetime}
                    formikErrors={formik.errors.wrappingDatetime}
                    />
                <InputText
                    label={'Название установщика плёнки'}
                    id={'installerName'}
                    name={'installerName'}
                    formikFieldProps={{...formik.getFieldProps('installerName')}}
                    formikTouched={formik.touched.installerName}
                    formikErrors={formik.errors.installerName}
                    placeholder={'Detailing Center Tomsk'}
                    />
                <InputText
                    label={'Название автомобиля'}
                    id={'carName'}
                    name={'carName'}
                    formikFieldProps={{...formik.getFieldProps('carName')}}
                    formikTouched={formik.touched.carName}
                    formikErrors={formik.errors.carName}
                    placeholder={'Марка и модель'}
                    />
                <InputText
                    label={'Адрес установщика плёнки'}
                    id={'installerAddress'}
                    name={'installerAddress'}
                    formikFieldProps={{...formik.getFieldProps('installerAddress')}}
                    formikTouched={formik.touched.installerAddress}
                    formikErrors={formik.errors.installerAddress}
                    placeholder={'г. Томск, пр. Ленина, д. 507'}
                    />
                <InputText
                    label={'Контактный телефон установщика плёнки'}
                    id={'installerContact'}
                    name={'installerContact'}
                    formikFieldProps={{...formik.getFieldProps('installerContact')}}
                    formikTouched={formik.touched.installerContact}
                    formikErrors={formik.errors.installerContact}
                    placeholder={'+7 (999) 123-45-67'}
                    />
                {/* <input type="hidden" {...formik.getFieldProps('photoLength')} /> */}
                                    
                <div className={style.photos}>
                    <div className={style.photoFieldLabel}>
                        <div className={style.photoFieldTitle}>
                            Фото выполненной оклейки
                        </div>
                        <div className={style.photoFieldUndertitle}>
                            На фотографии должно быть хорошо видно выполненную работу. Можно добавить до 10 фотографий.
                        </div>
                        {formik.touched.photoLength && formik.errors.photoLength ? <div className={style.fieldError}>{formik.errors.photoLength}</div> : null}
                    </div>
                    <div className={style.photosList}>
                        {
                            photoRenderedFiles?.map((item, index, arr) => (
                                <div key={index} className={style.photo}>
                                    <div className={style.photoContainer}>
                                        <img key={item.index} src={item.blob} />
                                        <div onClick={() => {onDeletePhoto(index)}} className={style.delPhotoBtn}>
                                            <DeletePhoto/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <label className={style.photo}>
                            <div className={style.photoContainer}>
                                <AddPhoto/>
                                <input multiple type="file" name="photos" id="photos" onChange={onChangePhotoFilesInput}/>
                            </div>
                        </label>
                    </div>
                </div>

                <MainBtn disabled={regState.isPending} type="submit">
                    Зарегистрировать
                </MainBtn>
                
            </MainForm>
            :
            null
            }
        </div>
        
    )
}