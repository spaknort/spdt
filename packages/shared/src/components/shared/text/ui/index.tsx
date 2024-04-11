import React, { CSSProperties, useEffect, useRef } from 'react'
import './index.sass'

interface TextProps {
    value: string,
    size: number,
    style?: CSSProperties,
    className?: string
}

<<<<<<< HEAD
export const Text: React.FC<TextProps> = ({ value, size, style }) => {
    const textRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (!textRef) return

        const textElem = textRef.current
        textElem.insertAdjacentHTML('beforeend', value)
    }, [])

    return (
        <p ref={textRef} className="text" style={{ fontSize: size + 'rem', ...style }}></p>
=======
export const Text: React.FC<TextProps> = ({ value, size, style, className }) => {
    return (
        <p className={"text " + className} style={{ fontSize: size + 'rem', ...style }}>{ value }</p>
>>>>>>> c6904d54476a442030c2b23f2047246ffbd9dbce
    )
}