import React from 'react'
import { InputFormTypes, generalSvgNames } from '@packages/shared'
import { Colours } from '@packages/shared'
import { GeneralSvgSelector } from '@packages/shared'
import './index.sass'

interface InputFormProps {
    type: InputFormTypes
    lable: string,
    placeholder: string,
    required: boolean
}

export const InputForm: React.FC<InputFormProps> = ({ type, lable, placeholder, required }) => {
    return (
        <div className="input-form">
            <label className='input-form__label'>{ lable + ((required) ? <span style={{ color: Colours.active_color }}>*</span>: '')}</label>
            {(type != InputFormTypes.password) ? <input type={type} placeholder={placeholder} className="input-form__input" />:
            <div>
                <input type={type} placeholder={placeholder} className="input-form__input" />
                <GeneralSvgSelector svgName={generalSvgNames.eye} params={{ width: 18, height: 18, fill: '#A3AED0', stroke: '#A3AED0' }} />
            </div>}
        </div>
    )
}