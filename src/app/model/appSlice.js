import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appAPI } from './appAPI'
import { notificationAPI } from 'modules/notification'
import { getCodesWithStatusNew } from 'modules/notification/model'
import { authorizationAPI } from 'modules/authorization'

const initialState = {
    data: {
        isInit: false,
        authData: {
            isAuth: false,
            data: null
        },
        appData: {
            codeStatuses: [],
            wrappingTypes: [],
            searchTypes: []
        }
    },
}

export const checkAuthorization = createAsyncThunk(
    'app/checkAuthorization',
    async (data, {dispatch}) => {
        try{
            const authToken = data.token ? data.token : localStorage.getItem('Ya.Oauth.Sdk.Token')
            if(authToken) {
                const authResp = await dispatch(authorizationAPI.endpoints.getAuthData.initiate({token: authToken}))
                if(!authResp.error && authResp.isSuccess) {
                    dispatch(setAuthData({data: {isAuth: true, data: authResp.data}}))
                } else {
                    console.log('error auth', authResp.error)
                    dispatch(setAuthData({data: {isAuth: false, data: null}}))
                }
            } else {
                dispatch(setAuthData({data: {isAuth: false, data: null}}))
            }
        } catch (error) {
            dispatch(setAuthData({data: {isAuth: false, data: null}}))
        }
    }
)

export const appInitialization = createAsyncThunk(
    'app/appInitialization',
    async (_, {dispatch}) => {
        try{

            const response = await dispatch(appAPI.endpoints.getAppData.initiate())
            await dispatch(getCodesWithStatusNew())
            await dispatch(checkAuthorization())

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
            throw Error('Error')
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
        },
        setAuthData(state, action) {
            state.data.authData = action.payload.data
        }
    }
})

export const { setAppInit, setAppData, setAuthData } = appSlice.actions
export default appSlice.reducer