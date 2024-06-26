import React, { useState, ChangeEvent, FocusEvent } from 'react'
import './index.sass'
import { InputTypes } from '../../../../lib/enum/inputTypes'
import { useTypedSelector } from '../../../../lib/hooks/useTypedSelector'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'
import { Colours, LightThemeColours } from '../../../..'

interface InputProps {
    placeholder: string,
    label: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    required?: boolean
}

export const Input: React.FC<InputProps> = ({ placeholder, label, required = false, value, setValue }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const inputThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color
    const labelThemeStyle = (theme == ThemeTypes.DARK) ? Colours.active_color: LightThemeColours.active_color

    const [textDirty, setTextDirty] = useState<boolean>()
    const [textError, setTextError] = useState<string>('Это поле не может быть пустым')

    function blurHandler(e: FocusEvent<HTMLInputElement>) {
        if (e.target.type == InputTypes.TEXT) setTextDirty(true)
    }

    function textHandler(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)

        if (e.target.value == '') setTextError('Это поле не может быть пустым')
        else if (e.target.value.length > 30) setTextError('Длинна названия должна быть меньше 30 символов')
        else setTextError('')
    }

    return (
        <div className="input-container">
            <label style={{ color: inputThemeStyle }} htmlFor="">
                { label }
                { (required) ? <span style={{ color: labelThemeStyle }}> *</span>: '' }
                { (textDirty && textError) ? <span style={{ color: labelThemeStyle }}>{ textError }</span>: '' }
            </label>
            <input
                style={{ color: inputThemeStyle }}
                onChange={e => textHandler(e)}
                onBlur={e => blurHandler(e)}
                value={value}
                placeholder={ placeholder }
                type='text'
                className={"input input_" + theme.toLowerCase()}
            />
        </div>
    )
}