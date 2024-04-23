import React from 'react'
import './index.sass'
import { InputTypes } from '../../../../lib/enum/inputTypes'
import { useTypedSelector } from '../../../../lib/hooks/useTypedSelector'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'
import { Colours, LightThemeColours } from '../../../..'

interface FileInputProps {
    placeholder: string,
    label: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    required?: boolean
}

export const FileInput: React.FC<FileInputProps> = ({ placeholder, label, required = false, value, setValue }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const inputThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color
    const labelThemeStyle = (theme == ThemeTypes.DARK) ? Colours.active_color: LightThemeColours.active_color

    return (
        <div className="file-input-container">
            <label style={{ color: inputThemeStyle }} htmlFor="">
                { label }
                { (required) ? <span style={{ color: labelThemeStyle }}> *</span>: '' }
                {/* { (fileDirty && fileError) ? <span style={{ color: labelThemeStyle }}>{ fileError }</span>: '' } */}
            </label>
            <input
                style={{ color: inputThemeStyle }}
                placeholder={placeholder}
                disabled
                className={"input input_" + theme.toLowerCase()}
            />
            {/* <input
                style={{ opacity: 0 }}
                placeholder={ placeholder }
                className={"file-input input input_" + theme.toLowerCase()}
                type='file'
            /> */}
        </div>
    )
}