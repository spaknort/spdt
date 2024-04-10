import React from "react"
import './index.sass'
import { Colours, IParsedFile, LightThemeColours, Text, UploadFileActionTypes, useTypedSelector } from "@packages/shared"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"
import { useDispatch } from "react-redux"

interface UploadFileProps {
    file: IParsedFile
}

export const UploadFile: React.FC<UploadFileProps> = ({ file }) => {
    const dispatch = useDispatch()
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const uploadFileThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color
    const fileName = (file.name.length > 20) ? file.name.slice(0, 17) + '...': file.name

    return (
        <div style={{ background: uploadFileThemeStyle }} className="upload-file">
            <Text style={{ width: 'max-content' }} value={fileName} size={0.8} />
            <div onClick={() => {
                dispatch({ type: UploadFileActionTypes.DELETE_UPLOAD_FILE, name: file.name })
            }} className="upload-file__cross">
                <div className="upload-file__cross-line"></div>
                <div className="upload-file__cross-line"></div>
            </div>
        </div>
    )
}