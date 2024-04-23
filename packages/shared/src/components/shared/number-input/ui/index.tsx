import React, { useState, ChangeEvent, FocusEvent } from 'react'
import './index.sass'
import { InputTypes } from '../../../../lib/enum/inputTypes'
import { useTypedSelector } from '../../../../lib/hooks/useTypedSelector'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'
import { Colours, LightThemeColours } from '../../../..'

interface InputProps {
    placeholder: string,
    label: string,
    setValue: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    min?: number,
    max?: number
    required?: boolean
}

export const NumberInput: React.FC<InputProps> = ({ placeholder, label, required = false, min = 100, max = 2500, value, setValue }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const inputThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color
    const labelThemeStyle = (theme == ThemeTypes.DARK) ? Colours.active_color: LightThemeColours.active_color

    const [numberDirty, setNumberDirty] = useState<boolean>()
    const [numberError, setNumberError] = useState<string>('Это поле не может быть пустым')

    function blurHandler(e: FocusEvent<HTMLInputElement>) {
        setNumberDirty(true)
    }

    function numberHandler(e: ChangeEvent<HTMLInputElement>) {
        setValue(Number(e.target.value))

        if (e.target.value == '') setNumberError('Это поле не может быть пустым')
        else if (Number(e.target.value) < 100) setNumberError('Цена не может быть меньше 100 руб.')
        else if (Number(e.target.value) > 2500) setNumberError('Цена не может быть больше 2500 руб.')
        else setNumberError('')
    }

    return (
        <div className="input-container">
            <label style={{ color: inputThemeStyle }} htmlFor="">
                { label }
                { (required) ? <span style={{ color: labelThemeStyle }}> *</span>: '' }
                { (numberDirty && numberError) ? <span style={{ color: labelThemeStyle }}>{ numberError }</span>: '' }
            </label>
            <input
                style={{ color: inputThemeStyle }}
                onChange={e => numberHandler(e)}
                onBlur={e => blurHandler(e)}
                type='number'
                min={min}
                max={max}
                value={value}
                placeholder={ placeholder }
                className={"input input_" + theme.toLowerCase()}
            />
        </div>
    )
}