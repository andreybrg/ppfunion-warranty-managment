import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    microalerts: {
        list: [
        ],
    }
}

export const setNewMicroalert = createAsyncThunk(
    'alert/setNewMicroalert',
    async (data, {dispatch}) => {
        dispatch(setMicroalert({text: data.text}))
        dispatch(delLastMicroalert())
    },
)

export const delLastMicroalert = createAsyncThunk(
    'alert/delLastMicroalert',
    async (data, {dispatch}) => {
        setTimeout(()=>{
            dispatch(removeLastMicroalert())
        }, 3000)
    },
)

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setMicroalert(state, action) {
            state.microalerts.list.push({text: action.payload.text, id: state.microalerts.list.length})
        },
        removeLastMicroalert(state) {
            state.microalerts.list.shift()
        }
    }
})

export const { setMicroalert, removeLastMicroalert } = alertSlice.actions
export default alertSlice.reducer