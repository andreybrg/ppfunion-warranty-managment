import React, { useContext, useEffect } from "react"
import { Layout } from "./Layout"
import { ModalsContext } from "modules/modals/context"
import { resizeListener } from "shared/utils/resizeListener"

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

    useEffect(() => {
        resizeListener()
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