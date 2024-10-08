import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchValue: '',
    searchType: '1',
    isOnMobileOpened: false,
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
        },
        toggleOnMobileOpened(state) {
            state.isOnMobileOpened = !state.isOnMobileOpened
        }
    }
})

export const { setSearchValue, resetSearchValue, setSearchType, toggleOnMobileOpened } = searchSlice.actions
export default searchSlice.reducer