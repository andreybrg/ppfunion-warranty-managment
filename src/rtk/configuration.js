import { configureStore } from "@reduxjs/toolkit"
import { appAPI, appSlice } from "app"
import { codeListAPI, codeListSlice } from "modules/codeList/model"
import { notificationAPI } from "modules/notification"
import { codeCardAPI, codeCardSlice } from "modules/codeManager"
import { filtrationSlice } from "modules/filtration"
import { mainModalSlice } from "modules/modals/mainModal"
import { centeredModalSlice } from "modules/modals/centeredModal"
import { codeGeneratorAPI, codeGeneratorSlice } from "modules/codeGenerator"
import { alertSlice } from "modules/alerts"
import { searchSlice } from "modules/search"
import { warrantyRegistrationAPI, warrantyRegistrationSlice } from "modules/warrantyRegistration"
import { authorizationAPI } from "modules/authorization"

const store = configureStore({
    reducer: {
        app: appSlice,
        mainModal: mainModalSlice,
        centeredModal: centeredModalSlice,
        filtration: filtrationSlice,
        codeList: codeListSlice,
        codeCard: codeCardSlice,
        codeGenerator: codeGeneratorSlice,
        alerts: alertSlice,
        search: searchSlice,
        warrantyRegistration: warrantyRegistrationSlice,
        [appAPI.reducerPath]: appAPI.reducer,
        [codeListAPI.reducerPath]: codeListAPI.reducer,
        [codeCardAPI.reducerPath]: codeCardAPI.reducer,
        [notificationAPI.reducerPath]: notificationAPI.reducer,
        [warrantyRegistrationAPI.reducerPath]: warrantyRegistrationAPI.reducer,
        [authorizationAPI.reducerPath]: authorizationAPI.reducer,
        
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(appAPI.middleware)
            .concat(codeListAPI.middleware)
            .concat(codeCardAPI.middleware)
            .concat(notificationAPI.middleware)
            .concat(codeGeneratorAPI.middleware)
            .concat(warrantyRegistrationAPI.middleware)
            .concat(authorizationAPI.middleware)
})

export default store