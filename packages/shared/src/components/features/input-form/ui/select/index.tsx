import React, { useRef } from 'react'
import './index.sass'
import { Colours, LightThemeColours, useTypedSelector } from '@packages/shared'
import { ThemeTypes } from '../../../../../lib/enum/themeTypes'

interface SelectorProps {
    items: Array<string>
}

export const Selector: React.FC<SelectorProps> = ({ items }) => {
    const 
        customSelectRef = useRef<HTMLDivElement | null>(null),
        selectBtnRef = useRef<HTMLButtonElement | null>(null),
        selectedValueRef = useRef<HTMLSpanElement | null>(null)

    const theme = useTypedSelector(state => state.themeReducer.theme)
    const dropDownThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color
    const dropDownBorderThemeStyle = (theme == ThemeTypes.DARK) ? Colours.block_color: LightThemeColours.block_color
    const labelThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color

    function selectButtonFunc () {
        if (customSelectRef.current == null) return
        if (selectBtnRef.current == null) return
        if (selectedValueRef.current == null) return

        const 
            customSelectElem   = customSelectRef.current,
            selectBtnElem      = selectBtnRef.current,
            selectedValueElem  = selectedValueRef.current,
            optionsList        = document.querySelectorAll('.select-dropdown li')

        customSelectElem.classList.toggle('active')
        selectBtnElem.setAttribute('aria-expanded', selectBtnElem.getAttribute('aria-expanded') == 'true' ? 'false' : 'true')

        optionsList.forEach(option => {
            function handler(e: MouseEvent) {
                if (e.clientX !== 0 && e.clientY !== 0) {
                    localStorage.setItem('signInAccoutType', this.children[1].textContent)
                    selectedValueElem.textContent = this.children[1].textContent
                    customSelectElem.classList.remove("active")
                    e.preventDefault()
                }
            }
            
            option.addEventListener('click', handler)
        })
    }
        
    return (
        <div className='input-form__container'>
            <div ref={customSelectRef} className={"custom-select"}>
                <button ref={selectBtnRef} onClick={() => selectButtonFunc()} className={"select-button select-button_" + theme.toLowerCase()}>
                    <span ref={selectedValueRef} className="selected-value">Open this select menu</span>
                    <span className="arrow"></span>
                </button>
                <ul style={{ backgroundColor: dropDownThemeStyle, border: 'solid 1px ' + dropDownBorderThemeStyle }} className="select-dropdown">
                    {items.map(value => (
                        <li className={"select-dropdown__item_" + theme.toLowerCase()} key={String((Date.now() * Math.random())) + value}>
                            <input type="radio" id={ value } name="social-account" />
                            <label style={{ color: labelThemeStyle }} htmlFor={ value }>{ value }</label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}