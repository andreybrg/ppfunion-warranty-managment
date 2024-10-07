import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchValue: '',
    searchType: '1',
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload.value
        },
        resetSearchValue(state) {
            state.searchValue = ''
        },
        setSearchType(state, action) {
            state.searchType = action.payload.value
        }
    }
})

export const { setSearchValue, resetSearchValue, setSearchType } = searchSlice.actions
export default searchSlice.reducer