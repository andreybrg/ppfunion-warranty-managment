import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_URL } from 'shared/utils/constants'

export const appAPI = createApi({
    reducerPath: 'appAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (builder) => ({
        // Получить данные для приложения
        getAppData: builder.query({
            query: () => ({
                url: `app/get/appdata`,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.error
            }),
        }),
        checkUserRights: builder.query({
            query: ({uid}) => ({
                url: `app/get/rights/${uid}`,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.error
            }),
        }),
    }),
})

export const { 
    useGetAppDataQuery,
    useCheckUserRightsQuery,
} = appAPI