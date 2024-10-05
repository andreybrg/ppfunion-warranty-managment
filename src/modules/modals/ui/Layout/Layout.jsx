import React from "react"
import { MainModal } from "../../mainModal"
import'./Modals.sass'
import { CenteredModal } from "../../centeredModal"

export const Layout = ({ mainModal, centeredModal }) => {
    return(
        <>
            <div id='main-modal'>
                    {mainModal.modal.isMounted && (
                        <MainModal modalTitle={mainModal.modal.title}>
                            {mainModal.modal.component}
                        </MainModal>
                    )}
            </div>
            <div id='centered-modal'>
                    {centeredModal.modal.isMounted && (
                        <CenteredModal modalTitle={centeredModal.modal.title}>
                            {centeredModal.modal.component}
                        </CenteredModal>
                    )}
            </div>
        </>
    )
}