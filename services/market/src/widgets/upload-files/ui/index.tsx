import React, { useEffect, useState } from "react"
import './index.sass'
import { Button, ButtonSizes, ButtonTypes, Colours, LightThemeColours, Text, Title, TitleSizes, UploadFileActionTypes, useTypedSelector } from "@packages/shared"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"
import { parseFiles } from "../lib/parseFiles"
import { useDispatch } from "react-redux"
import { UploadFile } from "../components/upload-file"

export const UploadFiles: React.FC = () => {
    const dispatch = useDispatch()
    const uploadFiles = useTypedSelector(state => state.uploadFileReducer.data)
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const uploadFilesThemeStyle = (theme == ThemeTypes.DARK) ? Colours.block_color: LightThemeColours.block_color
    const uploadFilesLeftThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color
    const [isFileUpload, setIsFileUpload] = useState<boolean>(false)

    useEffect(() => { dispatch({type: UploadFileActionTypes.ADD_UPLOAD_FILE, data: []}) }, [])
    useEffect(() => { if (uploadFiles.length == 0) setIsFileUpload(false) }, [uploadFiles])

    return (
        <div style={{ background: uploadFilesThemeStyle }} className="upload-files">
            <div style={{ background: uploadFilesLeftThemeStyle }} className="upload-files__left">
                {
                    (!isFileUpload) ? 
                        <div className="upload-files__upload">
                            <input multiple onChange={(event) => {
                                parseFiles(event.target.files).then(result => {
                                    setIsFileUpload(true)
                                    dispatch({ type: UploadFileActionTypes.ADD_UPLOAD_FILE, data: result })
                                })
                            }} type="file" className="upload-files__input" />
                            <img className="upload-files__img" src="https://lh3.google.com/u/0/d/16-8T8QczAZxQX-ceGaHt5EUsziRrx5YP" alt="Upload Image" />
                            <br />
                            <Title value="Upload Files" size={TitleSizes.medium} />
                            <Text className="upload-files__text" value="PNG and JPG files are allowed" size={0.875} />
                        </div>:
                        <div className="upload-files__files">
                            {
                                uploadFiles.map(file => (
                                    <UploadFile file={file} key={file.name} />
                                ))
                            }
                        </div>
                }
            </div>
            <div className="upload-files__right">
                <Title value="Complete your profile" size={TitleSizes.medium} />
                <Text style={{ width: '250px', marginTop: '6px' }} value="Stay on the pulse of distributed projects with an anline whiteboard to plan, coordinate and discuss" size={1} />
                <Button styles={{ marginTop: '52px' }} value="Publish now" size={ButtonSizes.small} type={ButtonTypes.active} />
            </div>
        </div>
    )
}