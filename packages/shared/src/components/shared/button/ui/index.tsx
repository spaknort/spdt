import React, { CSSProperties } from 'react'
import { ButtonSizes, ButtonTypes, Colours } from '@packages/shared'
import './index.sass'

interface ButtonProps {
    value: string,
    type: ButtonTypes,
    size: ButtonSizes,
    styles?: CSSProperties,
    disabled?: boolean,
    className?: string,
    id?: string,
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ value, type, size, styles, disabled, className, id, onClick }) => {
    const localStyle: CSSProperties = {
        backgroundColor: (type == ButtonTypes.active) ? Colours.active_color:
            (type == ButtonTypes.inactive) ? 'transparent': '',
        
        color: (type == ButtonTypes.active) ? Colours.text_color: 
            (type == ButtonTypes.inactive) ? Colours.active_color: '',

        border: (type == ButtonTypes.active) ? 'none': 
            (type == ButtonTypes.inactive) ? `solid 1px ${Colours.active_color}`: '',
    }

    return (
        <input disabled={disabled} onClick={onClick} style={{ ...localStyle, ...styles }} id={id} className={className + ' button button_' + size} type="button" value={value} />
    ) 
}