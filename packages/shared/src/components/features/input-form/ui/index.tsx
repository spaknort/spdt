import React, { useState, useEffect, FocusEvent, ChangeEvent } from 'react'
import { InputTypes, LightThemeColours, generalSvgNames, useTypedSelector, userTypes } from '@packages/shared'
import { Colours } from '@packages/shared'
import { GeneralSvgSelector } from '@packages/shared'
import { Selector } from './select'
import './index.sass'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'

interface InputFormProps {
    type: InputTypes
    lable: string,
    placeholder: string,
    required: boolean,
}

export const InputForm: React.FC<InputFormProps> = ({ type, lable, placeholder, required }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const inputThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color
    const labelThemeStyle = (theme == ThemeTypes.DARK) ? Colours.active_color: LightThemeColours.active_color
    const [showPasswordState, setShowPasswordState] = useState<boolean>(false)
    const 
        [email, setEmail] = useState<string>(),
        [text, setText] = useState<string>(),
        [password, setPassword] = useState<string>(''),
        [number, setNumber] = useState<string>(''),
        [emailDirty, setEmailDirty] = useState<boolean>(),
        [textDirty, setTextDirty] = useState<boolean>(),
        [passwordDirty, setPasswordDirty] = useState<boolean>(),
        [numberDirty, setNumberDirty] = useState<boolean>(),
        [emailError, setEmailError] = useState<string>('Поле email не может быть пустым'),
        [textError, setTextError] = useState<string>('Это поле не может быть пустым'),
        [passwordError, setPasswordErorr] = useState<string>('Поле password не может быть пустым'),
        [numberError, setNumberErorr] = useState<string>('Не указан номер телефна')

    function blurHandler(e: FocusEvent<HTMLInputElement>) {
        if (e.target.type == InputTypes.EMAIL) setEmailDirty(true)
        if (e.target.type == InputTypes.PASSWORD) setPasswordDirty(true)
        if (e.target.type == InputTypes.TEXT) setTextDirty(true)
        if (e.target.type == InputTypes.TEL) setNumberDirty(true)
    }

    function emailHandler(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
        localStorage.setItem('signInEmail', e.target.value)

        const regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        (!regexp.test( String(e.target.value).toLocaleLowerCase() )) ? setEmailError('Введен не корректный email'): setEmailError('')
    }

    function textHandler(e: ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
        if (lable == 'Name') { localStorage.setItem('signInName', e.target.value) }
        if (lable == 'Surname') { localStorage.setItem('signInSurname', e.target.value) }

        if (e.target.value == '') setTextError('Это поле не может быть пустым')
        else setTextError('')
    }

    function passwordHandler(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
        localStorage.setItem('signInPassword', e.target.value);
        (e.target.value.length < 8) ? setPasswordErorr('Пароль должен быть длинее восьми сиволов'): setPasswordErorr('')
    }

    function numberHandler(e: ChangeEvent<HTMLInputElement>) {
        setNumber(e.target.value);
        localStorage.setItem('signInNumber', e.target.value);

        const regexp = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
        (!regexp.test( String(e.target.value).toLocaleLowerCase() )) ? setNumberErorr('Введен не корректный номер'): setNumberErorr('')
    }

    return (
        <div className="input-form">
            <label style={{ color: inputThemeStyle }} className='input-form__label'>
                { lable }
                { (required) ? <span style={{ color: labelThemeStyle }}> *</span>: '' }
                { (emailDirty && emailError) ? <span style={{ color: labelThemeStyle }}>{ emailError }</span>: '' }
                { (textDirty && textError) ? <span style={{ color: labelThemeStyle }}>{ textError }</span>: '' }
                { (passwordDirty && passwordError) ? <span style={{ color: labelThemeStyle }}>{ passwordError }</span>: '' }
                { (numberDirty && numberError) ? <span style={{ color: labelThemeStyle }}>{ numberError }</span>: '' }
            </label>
            {
                (type == InputTypes.EMAIL) ?
                    <input onChange={ emailHandler } onBlur={ blurHandler } style={{ color: inputThemeStyle }} value={email} type={type} placeholder={placeholder} className={"input-form__input input-form__input_" + theme.toLowerCase()} />:
                (type == InputTypes.TEXT) ?
                    <input onChange={ textHandler } style={{ color: inputThemeStyle }} onBlur={ blurHandler } value={text} type={type} placeholder={placeholder} className={"input-form__input input-form__input_" + theme.toLowerCase()} />:
                (type == InputTypes.PASSWORD) ? 
                    <div className='input-form__container'>
                        <input onChange={ passwordHandler } onBlur={ blurHandler } style={{ color: inputThemeStyle }} value={password} type={(!showPasswordState) ? 'password': 'text'} placeholder={placeholder} className={"input-form__input input-form__input_" + theme.toLowerCase()} />
                        <GeneralSvgSelector styles={{ cursor: 'pointer' }} onClick={() => setShowPasswordState(!showPasswordState)} className='input-form__eye' svgName={(!showPasswordState) ? generalSvgNames.eye: generalSvgNames.crossedEye} params={{ width: 22, height: 20, fill: '#A3AED0', stroke: '#A3AED0' }} />
                    </div>:
                (type == InputTypes.SELECTOR) ?
                    <Selector items={ userTypes }/>:
                (type == InputTypes.TEL) ?
                    <input onChange={ numberHandler } onBlur={ blurHandler } style={{ color: inputThemeStyle }} value={number} type={type} placeholder={placeholder} pattern="^[+]?[0-9]{9,12}$" className={"input-form__input input-form__input_" + theme.toLowerCase()} />:
                ''
            }
        </div>
    )
}