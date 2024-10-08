import React, { useState } from 'react'
import style from './RegisteredImage.module.sass'
import { IMAGES_DIRECTORY } from 'shared/utils/constants'
import cn from 'classnames'

export const RegisteredImage = ({ img }) => {

    const [ isLoaded, setIsLoaded ] = useState(false)

    const onImageLoad = () => {
        setIsLoaded(true)
    }

    return(
        <div className={style.imageContainer}>
            <div className={cn(
                    style.image,
                    {[style.imageLoaded]: isLoaded}
                )}>
                <img onLoad={() => onImageLoad()} src={IMAGES_DIRECTORY+img.path} alt="" />
            </div>
        </div>
    )
}