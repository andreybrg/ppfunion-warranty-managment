import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { appAPI } from './appAPI'
import { getCodesWithStatusNew } from 'modules/notification/model'
import { authorizationAPI } from 'modules/authorization'
import { setNewMicroalert } from 'modules/alerts'

const initialState = {
    data: {
        isInit: false,
        isInitError: false,
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

export const checkRights = createAsyncThunk(
    'app/checkRights',
    async (data={}, {dispatch}) => {
        try{
            if(data.uid) {
                const response = await dispatch(appAPI.endpoints.checkUserRights.initiate({uid: data.uid}))
                dispatch(setAccess({access: response.data.access}))
                if(!response.error) {
                    if(!response.data.access) {
                        throw new Error('Вам запрещено пользоваться данным ресурсом')
                    }
                } else {
                    throw new Error(`Ошибк при проверке прав — ${response.error.message}`)
                }
            }
        } catch (error) {
            dispatch(setNewMicroalert({text: `${error.message}`}))
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
                if(!authResp.error && authResp.isSuccess) {
                    dispatch(setAuthData({data: {isAuth: true, data: authResp.data}}))
                } else {
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

export const getAndSetApplicationData = createAsyncThunk(
    'app/getAndSetApplicationData',
    async (_, {dispatch}) => {
        try{
            
            const response = await dispatch(appAPI.endpoints.getAppData.initiate())
            if(!response.error) {
                dispatch(setAppData(
                    {
                        codeStatuses: response.data.data.codeStatuses,
                        wrappingTypes: response.data.data.wrappingTypes,
                        searchTypes: response.data.data.searchTypes
                    }   
                ))
            } else {
                throw Error(`Ошибка получения данных приложения — ${response.error.message}`)
            }

        } catch (error) {
            dispatch(setInitError())
            dispatch(setNewMicroalert({text: `Ошибка: ${error.message}`}))
        }
    }
)

export const appInitialization = createAsyncThunk(
    'app/appInitialization',
    async (_, {dispatch, getState}) => {
        Promise.all([
            dispatch(getAndSetApplicationData()),
            dispatch(getCodesWithStatusNew()),
            dispatch(checkAuthorization())
        ])
        .then(async () => {
            const authData = getState().app.data.authData
            if(authData.isAuth) {
                await dispatch(checkRights({uid: authData.id}))
            }
        })
        .then(() => {
            const isAppInitError = getState().app.data.isInitError
            if(!isAppInitError) {
                dispatch(setAppInit())
            }
        })
        .catch((error) => console.log('Init error', error))
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
        },
        setInitError(state) {
            state.data.isInitError = true
        }
    }
})

export const { setAppInit, setAppData, setAuthData, setAccess, setInitError } = appSlice.actions
export default appSlice.reducer