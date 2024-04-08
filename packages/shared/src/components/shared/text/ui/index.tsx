import React, { CSSProperties } from 'react'
import './index.sass'

interface TextProps {
    value: string,
    size: number,
    style?: CSSProperties
}

export const Text: React.FC<TextProps> = ({ value, size, style }) => {
    return (
        <p className="text" style={{ fontSize: size + 'rem', ...style }}>{ value }</p>
    )
}