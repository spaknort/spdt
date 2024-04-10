import React, { CSSProperties } from 'react'
import './index.sass'

interface TextProps {
    value: string,
    size: number,
    style?: CSSProperties,
    className?: string
}

export const Text: React.FC<TextProps> = ({ value, size, style, className }) => {
    return (
        <p className={"text " + className} style={{ fontSize: size + 'rem', ...style }}>{ value }</p>
    )
}