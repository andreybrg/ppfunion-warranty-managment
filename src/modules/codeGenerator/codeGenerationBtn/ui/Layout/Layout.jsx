import React, { useContext } from 'react'
import style from './Layout.module.sass'
import { ReactComponent as AddCodeSvg } from 'assets/images/qr_code_add.svg'
import { ModalsContext } from 'modules/modals'
import { CodeGenerationForm } from 'modules/codeGenerator/codeGenerationForm'

export const Layout = ({  }) => {

    const { centeredModalController } = useContext(ModalsContext)

    return(
        <button className={style.btn} type="button"
            onClick={
                () => centeredModalController.mountCenteredModal(<CodeGenerationForm/>, 'Сгенерировать')
            }
            >
            <AddCodeSvg/>
        </button>
    )
}