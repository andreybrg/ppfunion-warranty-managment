import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchValue: null,
    searchBy: 1,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload.value
        },
        setSearchBy(state, action) {
            state.searchBy = action.payload.searchBy
        }
    }
})

export const { setSearchValue, setSearchBy } = searchSlice.actions
export default searchSlice.reducer