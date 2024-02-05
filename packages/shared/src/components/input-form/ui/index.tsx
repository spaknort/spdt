import React, { useState, useEffect, FocusEvent, ChangeEvent } from 'react'
import { InputFormTypes, generalSvgNames, userTypes } from '@packages/shared'
import { Colours } from '@packages/shared'
import { GeneralSvgSelector } from '@packages/shared'
import { Selector } from './select'
import './index.sass'

interface InputFormProps {
    type: InputFormTypes
    lable: string,
    placeholder: string,
    required: boolean,
}

export const InputForm: React.FC<InputFormProps> = ({ type, lable, placeholder, required }) => {
    const [showPasswordState, setShowPasswordState] = useState<boolean>(false)
    const 
        [email, setEmail] = useState<string>(),
        [password, setPassword] = useState<string>(''),
        [emailDirty, setEmailDirty] = useState<boolean>(),
        [passwordDirty, setPasswordDirty] = useState<boolean>(),
        [emailError, setEmailError] = useState<string>('Email не может быть пустым'),
        [passwordError, setPasswordErorr] = useState<string>('Password не может быть пустым')

    function blurHandler(e: FocusEvent<HTMLInputElement>) {
        switch (e.target.type) {
            case InputFormTypes.email:
                setEmailDirty(true)
            break
            case InputFormTypes.password:
                setPasswordDirty(true)
            break
        }
    }

    function emailHandler(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)

        const regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        (!regexp.test( String(e.target.value).toLocaleLowerCase() )) ? setEmailError('Введен не корректный email'): setEmailError('')
    }

    function passwordHandler(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
        (e.target.value.length < 8) ? setPasswordErorr('Пароль должен быть длинее восьми сиволов'): setPasswordErorr('')
    }

    return (
        <div className="input-form">
            <label style={{ color: Colours.text_color }} className='input-form__label'>
                { lable }
                { (required) ? <span style={{ color: Colours.active_color }}> *</span>: '' }
                { (emailDirty && emailError) ? <span style={{ color: Colours.active_color }}>{ emailError }</span>: '' }
                { (passwordDirty && passwordError) ? <span style={{ color: Colours.active_color }}>{ passwordError }</span>: '' }
            </label>
            {
                (type == InputFormTypes.email) ?
                    <input onChange={ emailHandler } onBlur={ blurHandler } style={{ color: Colours.text_color }} value={email} type={type} placeholder={placeholder} className="input-form__input" />:
                (type == InputFormTypes.text) ?
                    <input style={{ color: Colours.text_color }} type={type} placeholder={placeholder} className="input-form__input" />:
                (type == InputFormTypes.password) ? 
                    <div className='input-form__container'>
                        <input onChange={ passwordHandler } onBlur={ blurHandler } style={{ color: Colours.text_color }} value={password} type={(!showPasswordState) ? 'password': 'text'} placeholder={placeholder} className="input-form__input" />
                        <GeneralSvgSelector styles={{ cursor: 'pointer' }} onClick={() => setShowPasswordState(!showPasswordState)} className='input-form__eye' svgName={(!showPasswordState) ? generalSvgNames.eye: generalSvgNames.crossedEye} params={{ width: 22, height: 20, fill: '#A3AED0', stroke: '#A3AED0' }} />
                    </div>:
                (type == InputFormTypes.selector) ?
                    <Selector items={ userTypes }/>:
                (type == InputFormTypes.tel) ?
                    <input style={{ color: Colours.text_color }} type={type} placeholder={placeholder} pattern="^[+]?[0-9]{9,12}$" className="input-form__input" />:
                ''
            }
        </div>
    )
}