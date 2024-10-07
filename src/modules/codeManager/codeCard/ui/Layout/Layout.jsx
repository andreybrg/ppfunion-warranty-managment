import React from 'react'
import style from './Layout.module.sass'
import { StatusNameColored } from 'shared/statusName'
import { MainBtn, SecondBtn } from 'shared/buttons'
import printSvg from 'assets/images/print.svg'
import { Content } from '../Content/Content'

export const Layout = ({ data, codeId, activateCode, isCodeActivationPending }) => {

    const statusInfos = {
        '1': 'Распечатайте, отправьте на упаковку и активируйте код гарантии, чтобы пользователь смог его зарегистрировать.',
        '2': 'Этот код гарантии ещё никем не зарегистрирован.',
        '3': null
    }

    return(
        <div className={style.container}>
            <div className={style.status}>
                <StatusNameColored status={data.code.status}/>
            </div>
            <div className={style.info}>{statusInfos[data.code.status]}</div>
            <Content
                registrationData={data.registrationData}
                status={data.code.status}
                />
            {
                data.code.status === 1
                ?
                <div className={style.btns}>
                    <SecondBtn 
                        icon={printSvg}
                        to={`/panel/qr/${data.code.code}`}
                        newTab={true}
                        >
                        Распечатать
                    </SecondBtn>
                    <MainBtn disabled={isCodeActivationPending} onClick={() => activateCode(codeId)}>
                        Активировать
                    </MainBtn>
                </div>
                :
                null
            }
            
        </div>
    )
}