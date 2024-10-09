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
        },
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
            const token = localStorage.getItem('authToken')
            if(token) {
                const authResp = await dispatch(authorizationAPI.endpoints.getAuthData.initiate({token: token}))
                console.log(authResp)
                setAuthData({isAuth: true})
            } else {
                console.log('Не авторизован')
                setAuthData({isAuth: false})
            }
            // Найти токен и сделать запрос если он есть
            //     Если ответ положительный, установить true
            //     Если токен не найден установить false

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
        },
        setAuthData(state, action) {
            state.data.authData = action.payload
        }
    }
})

export const { setAppInit, setAppData, setAuthData } = appSlice.actions
export default appSlice.reducer