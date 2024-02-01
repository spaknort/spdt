import { FavoriteButtonTypes } from "@/shared/lib/enums/FavoriteButtonTypes"
import React, { useState } from "react"
import { Colours } from "@packages/shared"
import './index.sass'
import { SvgSelector } from "../svgSelector"
import { svgNames } from "@/shared/lib/enums/svgNames"

interface FavoriteButtonProps {
    type: FavoriteButtonTypes,
    className?: string,
    onClick?: () => void
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ type, className, onClick }) => {
    const [typeButton, setTypeButton] = useState<boolean>(false)

    return (
        <button onClick={() => {
            if (onClick !== undefined) onClick()
            setTypeButton(!typeButton)
        }}  className={'heart-btn ' + className + ' heart_' + ((type == FavoriteButtonTypes.product) ? 'product': 'product-cart')}>
            {(type == FavoriteButtonTypes.productCart) ? <SvgSelector svgName={(typeButton) ? svgNames.heartFillOutline: svgNames.heartOutline} params={{ width: 18, height: 18, fill: Colours.background_light_color, stroke: Colours.background_light_color }} />
            : <SvgSelector svgName={svgNames.filledHeart} params={{ width: 18, height: 18, fill: '#848E9C', stroke: '#848E9C' }} />}
        </button>
    )
}

export default FavoriteButton