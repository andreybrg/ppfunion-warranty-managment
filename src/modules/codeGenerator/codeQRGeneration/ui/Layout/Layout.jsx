import React from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { CODE_REGISTER_PAGE_URL } from 'shared/utils/constants'
import style from './Layout.module.sass'
import { MainBtn } from 'shared/buttons'

export const Layout = ({ code }) => {
    return(
        <div className={style.wrapper}>
            <div className={style.qrcode}>
                <QRCodeCanvas 
                    value={`${CODE_REGISTER_PAGE_URL}/${code}`}
                    size={300}
                    />
            </div>
            <div className={style.code}>
                {code}
            </div>
            <MainBtn onClick={() => window.print()}>
                Перейти к печати
            </MainBtn>
        </div>
    )
}