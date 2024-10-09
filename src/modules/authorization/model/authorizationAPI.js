import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authorizationAPI = createApi({
    reducerPath: 'authorizationAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://login.yandex.ru/info?&format=json' }),
    endpoints: (builder) => ({
        // Получить данные для приложения
        getAuthData: builder.query({
            query: ({ token }) => ({
                url: `app/get/appdata`,
                headers: {
                    Authorization: `OAuth ${token}`
                },
                keepUnusedDataFor: 5,
                // validateStatus: (response, result) =>
                    // response.status === 200 && !result.error
            }),
        }),
    }),
})

export const { 
    useGetAuthDataQuery,
} = authorizationAPI