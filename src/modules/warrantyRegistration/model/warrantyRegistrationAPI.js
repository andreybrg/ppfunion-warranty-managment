import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_API_URL } from 'shared/utils/constants'

export const warrantyRegistrationAPI = createApi({
    reducerPath: 'warrantyRegistrationAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (builder) => ({
        // Регистрация кода
        registerCode: builder.mutation({
            query: ({ code, formData }) => ({
                url: `codes/post/register/${code}`,
                method: 'POST',
                body: formData,
                formData: true,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.error
            }),
        })
    }),
})

export const {
    useRegisterCodeMutation
} = warrantyRegistrationAPI