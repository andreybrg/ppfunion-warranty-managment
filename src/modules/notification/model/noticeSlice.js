import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { notificationAPI } from './notificationAPI'
import { setNewMicroalert } from 'modules/alerts'
import { setInitError } from 'app/model/appSlice'

export const getCodesWithStatusNew = createAsyncThunk(
    'notice/getCodesWithStatusNew',
    async (data, {dispatch}) => {
        try {
            await dispatch(notificationAPI.endpoints.getCodesNewStatus.initiate())
        } catch(error) {
            dispatch(setInitError())
            dispatch(setNewMicroalert({text: 'Ошибка получения данных для уведомлений'}))
        }
    } 
)