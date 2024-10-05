import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filtration: {
        status: 0
    }

}

const filtrationSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setFiltrationStatus(state, action) {
            state.filtration.status = action.payload.status
        },
    }
})

export const { setFiltrationStatus } = filtrationSlice.actions
export default filtrationSlice.reducer