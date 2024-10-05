import React, { useContext } from "react"
import { Layout } from "./Layout"
import { ModalsContext } from "modules/modals/context"

export const Container = ({ children, modalTitle }) => {

    const { mainModalController } = useContext(ModalsContext)

    const closeModal = (e, closedByBtn=false) => {
        if(closedByBtn) {
            mainModalController.unmountMainModal()
        } else {
            if(!e.target.closest('[data-modal="main-modal-content"]')) {
                mainModalController.unmountMainModal()
            }
        }
    }
    
    return(
        <Layout
            closeModal={closeModal}
            modalTitle={modalTitle}
            >
            {children}
        </Layout>
    )
}