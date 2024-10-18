import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_URL } from 'shared/utils/constants'

export const notificationAPI = createApi({
    reducerPath: 'notificationAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (builder) => ({
        // Получить данные для приложения
        getCodesNewStatus: builder.query({
            query: () => ({
                url: `codes/get/new`,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.error
            }),
            providesTags: ["CodeItem"]
        }),
    }),
})

export const { 
    useGetCodesNewStatusQuery,
} = notificationAPI