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
                    value={`${CODE_REGISTER_PAGE_URL}${code}`}
                    size={300}
                    />
            </div>
            <div className={style.code}>
                {code}
            </div>
            <div className={style.codeInfo}>
                <span>
                Отсканируйте QR-код или перейдите по адресу w.ppfunion.com/register и зарегистрируйте официальную гарантию производителя сразу после установки плёнки.
                </span>
                <span>
                Остались вопросы? Контакты для связи с производителем:
                </span>
                <span>
                <b>ppfunion.com</b><br />
                <b>+7 (991) 135-8157</b><br />
                <b>+7 (991) 135-8156</b><br />
                <b>provide.vseplenki@gmail.com</b>
                </span>
            </div>
            <MainBtn onClick={() => window.print()}>
                Перейти к печати
            </MainBtn>
        </div>
    )
}