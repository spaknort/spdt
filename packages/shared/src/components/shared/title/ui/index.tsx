import React, { CSSProperties, useRef, useEffect } from 'react'
import './index.sass'
import { LightThemeColours, TitleSizes, useTypedSelector } from '@packages/shared'
import { Colours } from '@packages/shared'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'

interface TitleProps {
    size: TitleSizes,
    value: string,
    style?: CSSProperties,
    className?: string,
    isContentEditable?: boolean,
    setText?: React.Dispatch<React.SetStateAction<string>>,
    onClick?: () => void
}

export const Title: React.FC<TitleProps> = ({ size, value, style, className, isContentEditable, onClick, setText }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const titleThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color
    const titleRef = useRef<HTMLHRElement | null>(null)

    useEffect(() => {
        if (!titleRef) return
        const titleElem = titleRef.current

        if (isContentEditable) {
            titleElem.focus()
        }
    }, [isContentEditable])
    
    return (
        (size == TitleSizes.large) ? <h1 ref={titleRef} suppressContentEditableWarning={true} contentEditable={isContentEditable} onClick={onClick} style={{ color: titleThemeStyle, ...style }} className={"header__title-large " + className}>{ value }</h1>:
        (size == TitleSizes.big) ? <h1 ref={titleRef} suppressContentEditableWarning={true} contentEditable={isContentEditable}  onClick={onClick} style={{ color: titleThemeStyle, ...style }} className={"header__title-big " + className}>{ value }</h1>:
        (size == TitleSizes.medium) ? <h3 ref={titleRef} suppressContentEditableWarning={true} contentEditable={isContentEditable} onClick={onClick} style={{ color: titleThemeStyle, ...style }} className={"header__title-medium " + className}>{ value }</h3>:
        (size == TitleSizes.small) ? <h5 ref={titleRef} suppressContentEditableWarning={true} contentEditable={isContentEditable} onInput={(e: React.FormEvent<HTMLHRElement>) => {
            e.preventDefault()
            // @ts-ignore
            setText(e.target.innerText)
        }} onClick={onClick} style={{ color: titleThemeStyle, ...style }} className={"header__title-small " + className}>{ value }</h5>: ''
    )
}