import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isInit: false,
}

const panelSlice = createSlice({
    name: 'panel',
    initialState,
    reducers: {
        setPanelInit(state) {
            state.isInit = true
        },
    }
})

export const { setPanelInit } = panelSlice.actions
export default panelSlice.reducer