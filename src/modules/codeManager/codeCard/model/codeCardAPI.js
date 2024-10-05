import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_API_URL } from 'shared/utils/constants'

export const codeCardAPI = createApi({
    reducerPath: 'codeCardAPI',
    tagTypes: ['CodeCard'],
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (builder) => ({
        // Получить данные кода
        getCodeData: builder.query({
            query: ({ id }) => ({
                url: `codes/get/item/${id}`,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.error
            }),
            providesTags: ['CodeCard']
        }),
        activateCodeStatus: builder.mutation({
            query: ({ id }) => ({
                url: `codes/post/activate/${id}`,
                method: 'POST',
                validateStatus: (response, result) =>
                    response.status === 200 && !result.error
            }),
            invalidatesTags: ['CodeCard']
        })
    }),
})

export const {
    useGetCodeDataQuery,
    useActivateCodeStatusMutation
} = codeCardAPI