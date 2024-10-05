import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMainModal, unsetMainModal } from "../../mainModal"
import { setCenteredModal, unsetCenteredModal } from "../../centeredModal"

export const ModalsContext = React.createContext()

export const ModalsProvider = ({ children }) => {
    
    const dispatch = useDispatch()

    const [ mainModalComponent, setMainModalComponent ] = useState(null)
    const mainModalData = useSelector(store => store.mainModal)
    const { isMounted: mainModalIsMounted, title: mainModalTitle } = mainModalData

    const [ centeredModalComponent, setCenteredModalComponent ] = useState(null)
    const centeredModalData = useSelector(store => store.centeredModal)
    const { isMounted: centeredModalIsMounted, title: centeredModalTitle } = centeredModalData

    const mainModalController = {
        modal: {
            component: mainModalComponent,
            isMounted: mainModalIsMounted,
            title: mainModalTitle
        },
        mountMainModal(Component, title) {
            setMainModalComponent(Component)
            dispatch(setMainModal({title}))
        },
        unmountMainModal() {
            setMainModalComponent(null)
            dispatch(unsetMainModal())
        }
    }

    const centeredModalController = {
        modal: {
            component: centeredModalComponent,
            isMounted: centeredModalIsMounted,
            title: centeredModalTitle
        },
        mountCenteredModal(Component, title) {
            setCenteredModalComponent(Component)
            dispatch(setCenteredModal({title}))
        },
        unmountCenteredModal() {
            setCenteredModalComponent(null)
            dispatch(unsetCenteredModal())
        }
    }


    return(
        <ModalsContext.Provider value={{mainModalController, centeredModalController}}>
            {children}
        </ModalsContext.Provider>
    )
}