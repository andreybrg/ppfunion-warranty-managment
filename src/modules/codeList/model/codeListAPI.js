import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_URL } from 'shared/utils/constants'

export const codeListAPI = createApi({
    reducerPath: 'codeListAPI',
    tagTypes: ['CodeList'],
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (builder) => ({
        // Получить данные для приложения
        getCodes: builder.query({
            query: ( data ) => {
                let queryUrl = 'codes/get/all?page='+data.page+'&limit='+data.limit
                queryUrl += data.status?`&status=${data.status}`:``
                queryUrl += data.searchType?`&searchType=${data.searchType}`:``
                queryUrl += data.searchQuery?`&searchQuery=${data.searchQuery}`:``
                return {
                    url: queryUrl,
                    validateStatus: (response, result) =>
                        response.status === 200 && !result.error}
            },
            providesTags: (result) =>
                result.data
                    ? 
                    [
                        ...result.data.map(({ id }) => ({ type: 'CodeList', id })),
                        { type: 'CodeList', id: 'LIST' },
                    ]
                    :
                    [{ type: 'CodeList', id: 'LIST' }],
        }),
    }),
})

export const { 
    useGetCodesQuery,
} = codeListAPI