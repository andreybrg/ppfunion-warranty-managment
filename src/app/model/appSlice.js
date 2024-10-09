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
    async (_, {dispatch}) => {
        try{
            const token = localStorage.getItem('Ya.Oauth.Sdk.Token')
            if(token) {
                const authResp = await dispatch(authorizationAPI.endpoints.getAuthData.initiate({token: token}))
                console.log(authResp)
                if(authResp.isSuccess) {
                    setAuthData({isAuth: true, data: authResp.data})
                }
            } else {
                setAuthData({isAuth: false, data: null})
            }
        } catch (error) {
            console.log('Ошибка которую получили', error)
            setAuthData({isAuth: false, data: null})
            // error.status
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
            console.log('Получили ошибку', error)
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
        },
        setAuthData(state, action) {
            state.data.authData = action.payload
        }
    }
})

export const { setAppInit, setAppData, setAuthData } = appSlice.actions
export default appSlice.reducer