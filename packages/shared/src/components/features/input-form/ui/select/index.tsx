import React, { useRef } from 'react'
import './index.sass'
import { Colours } from '@packages/shared'

interface SelectorProps {
    items: Array<string>
}

export const Selector: React.FC<SelectorProps> = ({ items }) => {
    const 
        customSelectRef = useRef<HTMLDivElement | null>(null),
        selectBtnRef = useRef<HTMLButtonElement | null>(null),
        selectedValueRef = useRef<HTMLSpanElement | null>(null)

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
            <div ref={customSelectRef} className="custom-select">
                <button ref={selectBtnRef} onClick={() => selectButtonFunc()} className="select-button">
                    <span ref={selectedValueRef} className="selected-value">Open this select menu</span>
                    <span className="arrow"></span>
                </button>
                <ul style={{ backgroundColor: Colours.background_color, border: 'solid 1px ' + Colours.block_color }} className="select-dropdown">
                    {items.map(value => (
                        <li key={String((Date.now() * Math.random())) + value}>
                            <input type="radio" id={ value } name="social-account" />
                            <label style={{ color: Colours.text_color }} htmlFor={ value }>{ value }</label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}