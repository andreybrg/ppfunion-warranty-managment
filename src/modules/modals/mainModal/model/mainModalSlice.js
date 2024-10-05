import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: null,
    isMounted: false,
}

const mainModalSlice = createSlice({
    name: 'mainModal',
    initialState,
    reducers: {
        setMainModal(state, action) {
            state.title = action.payload.title
            state.isMounted = true
        },
        unsetMainModal(state) {
            state.title = null
            state.isMounted = false
        }
    }
})

export const { setMainModal, unsetMainModal } = mainModalSlice.actions
export default mainModalSlice.reducer