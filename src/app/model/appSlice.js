import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appAPI } from './appAPI'
import { getCodesWithStatusNew } from 'modules/notification/model'
import { authorizationAPI } from 'modules/authorization'

const initialState = {
    data: {
        isInit: false,
        authData: {
            isAuth: false,
            data: null,
            access: false
        },
        appData: {
            codeStatuses: [],
            wrappingTypes: [],
            searchTypes: []
        }
    },
}

export const logOut = createAsyncThunk(
    'app/logOut',
    async (_, {dispatch}) => {
        localStorage.removeItem('Ya.Oauth.Sdk.Token')
        dispatch(setAuthData({data: {isAuth: false, data: null}}))
    }
)

export const accessRequest = createAsyncThunk(
    'app/accessRequest',
    async (_, {dispatch, getState}) => {
        const authData = getState().app.data.authData
        await dispatch(appAPI.endpoints.accessRequest.initiate({id: authData.data.id, email: authData.data.default_email}))
    }
)

export const checkRights = createAsyncThunk(
    'app/checkRights',
    async (data, {dispatch}) => {
        try{
            if(data.uid) {
                const response = await dispatch(appAPI.endpoints.checkUserRights.initiate({uid: data.uid}))
                dispatch(setAccess({access: response.data.access}))
            }
        } catch (error) {
            console.log('app/checkRights error', error)
        }
    }
)

export const checkAuthorization = createAsyncThunk(
    'app/checkAuthorization',
    async (data={}, {dispatch}) => {
        try{
            const authToken = data.token ? data.token : localStorage.getItem('Ya.Oauth.Sdk.Token')
            if(authToken) {
                const authResp = await dispatch(authorizationAPI.endpoints.getAuthData.initiate({token: authToken}))
                await dispatch(checkRights({uid: authResp.data.id ? authResp.data.id : null}))
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
    async (_, {dispatch, getState}) => {
        try{
            
            const response = await dispatch(appAPI.endpoints.getAppData.initiate())
            await dispatch(getCodesWithStatusNew())
            await dispatch(checkAuthorization())

            const authData = getState().app.data.authData
            if(authData.isAuth) {
                await dispatch(checkRights({uid: authData.data.id}))
            }

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
            state.data.authData.data = action.payload.data.data
            state.data.authData.isAuth = action.payload.data.isAuth
        },
        setAccess(state, action) {
            state.data.authData.access = action.payload.access
        }
    }
})

export const { setAppInit, setAppData, setAuthData, setAccess } = appSlice.actions
export default appSlice.reducer