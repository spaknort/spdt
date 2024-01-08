import React from 'react'
import './index.sass'
import { TitleSizes } from '@packages/shared'
import { Colours } from '@packages/shared'

interface TitleProps {
    size: TitleSizes,
    value: string
}

export const Title: React.FC<TitleProps> = ({ size, value }) => {
    return (
        (size == TitleSizes.big) ? <h1 style={{ color: Colours.text_color }} className="header__title-big">{ value }</h1>:
        (size == TitleSizes.medium) ? <h3 style={{ color: Colours.text_color }} className="header__title-medium">{ value }</h3>:
        (size == TitleSizes.small) ? <h5 style={{ color: Colours.text_color }} className="header__title-small">{ value }</h5>: ''
    )
}