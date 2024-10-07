import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appAPI } from './appAPI'
import { notificationAPI } from 'modules/notification'
import { getCodesWithStatusNew } from 'modules/notification/model'

const initialState = {
    data: {
        isInit: false,
        appData: {
            codeStatuses: [],
            wrappingTypes: [],
            searchTypes: []
        }
    },

}

export const appInitialization = createAsyncThunk(
    'app/appInitialization',
    async (_, {dispatch}) => {
        try{
            const response = await dispatch(appAPI.endpoints.getAppData.initiate())
            await dispatch(getCodesWithStatusNew())

            if(!response.error) {
                dispatch(setAppData(
                    {
                        codeStatuses: response.data.data.codeStatuses,
                        wrappingTypes: response.data.data.wrappingTypes,
                        searchTypes: response.data.data.searchTypes
                    }   
                ))
            } else {
                throw Error('Error')
            }
            
            dispatch(setAppInit())

        } catch (error) {
            throw Error(error)
        }
    }
)

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppInit(state) {
            state.data.isInit = true
        },
        setAppData(state, action) {
            state.data.appData = action.payload
        }
    }
})

export const { setAppInit, setAppData } = appSlice.actions
export default appSlice.reducer