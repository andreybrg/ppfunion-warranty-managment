import React, { useContext, useEffect } from "react"
import { Layout } from "./Layout"
import { ModalsContext } from "modules/modals/context"
import { resizeListener } from "shared/utils/resizeListener"

export const Container = ({ children, modalTitle }) => {

    const { centeredModalController } = useContext(ModalsContext)

    const closeModal = (e, closedByBtn=false) => {
        if(closedByBtn) {
            centeredModalController.unmountCenteredModal()
        } else {
            if(!e.target.closest('[data-modal="centered-modal-content"]')) {
                centeredModalController.unmountCenteredModal()
            }
        }
    }
    
    useEffect(() => {
        window.addEventListener('resize', resizeListener)
        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [])

    return(
        <Layout
            closeModal={closeModal}
            modalTitle={modalTitle}
            >
            {children}
        </Layout>
    )
}