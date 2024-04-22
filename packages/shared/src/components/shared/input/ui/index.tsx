import React from 'react'
import './index.sass'
import { InputTypes } from '../../../../lib/enum/inputTypes'

interface InputProps {
    placeholder: string,
    type: InputTypes,
    label: string
}

export const Input: React.FC<InputProps> = ({ placeholder, type, label }) => {
    return (
        <div className="input-container">
            <label htmlFor="">{ label }</label>
            <input id='' placeholder={ placeholder } type={ type } className="input" />
        </div>
    )
}