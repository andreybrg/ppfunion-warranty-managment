import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { codeCardAPI } from './codeCardAPI'
import { codeListAPI } from 'modules/codeList/model'
import { notificationAPI } from 'modules/notification'

export const doCodeActivation = createAsyncThunk(
    'codeCard/doCodeActivation',
    async (data, {dispatch}) => {
        try {
            const response = await dispatch(codeCardAPI.endpoints.activateCodeStatus.initiate({id: data.id}))
            
            // response.error приходит если на сервере ошибка 500 или другая
            if(response.data.error) {
                throw Error()
            } else {
                await dispatch(codeListAPI.util.invalidateTags(["CodeList"]))
                await dispatch(notificationAPI.util.invalidateTags(["CodeItem"]))
            }
        } catch (error) {
            console.error(error)
            throw Error(error)
        }
    } 
)


const initialState = {
    codeActivation: {
        isPending: false,
    }
}

const codeCardSlice = createSlice({
    name: 'codeCard',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(doCodeActivation.pending, (state) => {
                state.codeActivation.isPending = true
            })
            .addCase(doCodeActivation.fulfilled, (state) => {
                state.codeActivation.isPending = false
            })
            .addCase(doCodeActivation.rejected, (state) => {
                state.codeActivation.isPending = false
            })
    }
})

export const {  } = codeCardSlice.actions
export default codeCardSlice.reducer