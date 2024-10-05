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
        [appAPI.reducerPath]: appAPI.reducer,
        [codeListAPI.reducerPath]: codeListAPI.reducer,
        [codeCardAPI.reducerPath]: codeCardAPI.reducer,
        [notificationAPI.reducerPath]: notificationAPI.reducer,
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(appAPI.middleware)
            .concat(codeListAPI.middleware)
            .concat(codeCardAPI.middleware)
            .concat(notificationAPI.middleware)
            .concat(codeGeneratorAPI.middleware)
})

export default store

window.reduxStore = store