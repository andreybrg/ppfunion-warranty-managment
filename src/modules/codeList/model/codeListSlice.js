import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
        page: 1,
    },
}

const codeListSlice = createSlice({
    name: 'codeList',
    initialState,
    reducers: {
        setListPage(state, action) {
            state.data.page = action.payload.page
        },
    }
})

export const { setListPage } = codeListSlice.actions
export default codeListSlice.reducer