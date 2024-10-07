import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { codeGeneratorAPI } from './codeGeneratorAPI'
import { codeListAPI } from 'modules/codeList/model'
import { notificationAPI } from 'modules/notification'

export const addNewCodes = createAsyncThunk(
    'codeGenerator/addNewCodes',
    async (data, {dispatch}) => {
        try {

            const formData = new FormData()
            
            data.codes.forEach((code, idx) =>
                formData.append(idx, code)
            )

            const response = await dispatch(codeGeneratorAPI.endpoints.addCodes.initiate({codes: formData}))
            // response.error приходит если на сервере ошибка 500 или другая
            if(response.data.error) {
                throw Error('Error')
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
    codeAdding: {
        isPending: false,
    }
}

const codeGeneratorSlice = createSlice({
    name: 'codeGenerator',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(addNewCodes.pending, (state) => {
                state.codeAdding.isPending = true
            })
            .addCase(addNewCodes.fulfilled, (state) => {
                state.codeAdding.isPending = false
            })
            .addCase(addNewCodes.rejected, (state) => {
                state.codeAdding.isPending = false
            })
    }
})

export const {  } = codeGeneratorSlice.actions
export default codeGeneratorSlice.reducer