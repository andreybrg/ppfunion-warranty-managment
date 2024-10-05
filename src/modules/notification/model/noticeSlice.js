import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { notificationAPI } from './notificationAPI'

export const getCodesWithStatusNew = createAsyncThunk(
    'notice/getCodesWithStatusNew',
    async (data, {dispatch}) => {
        try {
            await dispatch(notificationAPI.endpoints.getCodesNewStatus.initiate())
        } catch(error) {
            throw Error(error)
        }
    } 
)