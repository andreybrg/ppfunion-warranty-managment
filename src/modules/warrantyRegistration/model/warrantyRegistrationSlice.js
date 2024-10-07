import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { warrantyRegistrationAPI } from './warrantyRegistrationAPI'

export const registerCode = createAsyncThunk(
    'warrantyRegistration/registerCode',
    async ({code, formData}, {dispatch}) => {
        try {
            const result = await dispatch(warrantyRegistrationAPI.endpoints.registerCode.initiate({code, formData}))
            if(result.error) {
                dispatch(setResultMessage({message: result.error.data.message}))
                window.scrollTo({top: 0, behavior: 'smooth'})
                throw Error()
            } else {
                dispatch(setResultMessage({message: result.data.message}))
            }
        } catch (error) {
            throw Error('error')
        }
    }
)

const initialState = {
    codeRegistration: {
        resultMessage: null,
        isPending: false,
        isError: false,
        isSuccess: false
    }
}

const warrantyRegistrationSlice = createSlice({
    name: 'warrantyRegistration',
    initialState,
    reducers: {
        setResultMessage(store, action) {
            store.codeRegistration.resultMessage = action.payload.message
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerCode.pending, (state) => {
                state.codeRegistration.isError = false
                state.codeRegistration.isSuccess = false
                state.codeRegistration.resultMessage = null
                state.codeRegistration.isPending = true
            })
            .addCase(registerCode.fulfilled, (state) => {
                state.codeRegistration.isPending = false
                state.codeRegistration.isSuccess = true
            })
            .addCase(registerCode.rejected, (state) => {
                state.codeRegistration.isPending = false
                state.codeRegistration.isError = true
            })
    }
})

export const { setResultMessage } = warrantyRegistrationSlice.actions
export default warrantyRegistrationSlice.reducer