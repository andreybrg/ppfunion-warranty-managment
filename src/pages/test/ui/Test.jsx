import React, { useState } from "react"
import { QRCodeCanvas } from 'qrcode.react'
import { genCode } from "shared/utils/genCode"

export const Test = () => {

    const [ codes, setCodes ] = useState([])

    const onRefresh = () => {
        const codesArray = []
        for(let i=0; i<10; i++) {
            let gensCode = genCode()
            console.log(gensCode)
            codesArray.push(gensCode)
        }
        setCodes(codesArray)
    }

    return(
        <>
            
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                columnGap: 20,
                rowGap: 20,
                margin: '20px 0'
            }}>
                
                {
                    codes.map((code, idx) =>
                        <QRCodeCanvas key={idx} value={`https://w.ppfunion.ru/warranty/${code}`} />
                    )
                }
                
            </div>
            <button onClick={() => onRefresh()}>
                Сгенерировать qr-коды
            </button>
        </>
    )
}