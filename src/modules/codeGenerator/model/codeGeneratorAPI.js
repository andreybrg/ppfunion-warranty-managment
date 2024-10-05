import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API_URL } from 'shared/utils/constants'

export const codeGeneratorAPI = createApi({
    reducerPath: 'codeGeneratorAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (builder) => ({
        // Отправить коды на сервер
        addCodes: builder.mutation({
            query: ({ codes }) => ({
                url: `codes/post/add`,
                method: 'POST',
                body: codes,
                formData: true,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.error
            }),
        })
    }),
})

export const {
    useAddCodesMutation,
} = codeGeneratorAPI