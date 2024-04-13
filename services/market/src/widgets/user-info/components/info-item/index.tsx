import { Colours, LightThemeColours, Text, Title, TitleSizes, useTypedSelector } from "@packages/shared"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"
import React, { useEffect, useState } from "react"
import { IInfoItem } from "../../lib/IInfoItem"
import './index.sass'
import { Edit } from "./edit"
import { sendEditData } from "../../api/sendEditData"

export const InfoItem: React.FC<IInfoItem> = ({ title, subTitle }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const userInfo = useTypedSelector(state => state.userReducer.userInfo)
    const EditInputThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color
    const InfoItemThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color
    const [text, setText] = useState<string>(title)
    const [isEditMode, setIsEditMode] = useState<boolean>(false)

    return (
        <div style={{ background: InfoItemThemeStyle }} className="info-item">
            <div className="info-item__text">
                <Text style={{ width: 'max-content' }} value={subTitle} size={0.875} />
                {
                    (!isEditMode) ? <Title style={{ width: 'max-content' }} value={text} size={TitleSizes.small} />:
                    <input style={{ width: (10 * text.length) + 'px', color: EditInputThemeStyle }} className="editInput" value={text} onChange={e => setText(e.target.value)} />
                }
            </div>
            <Edit onClick={() => {
                setIsEditMode(!isEditMode)
                console.log(text)
                if (isEditMode) sendEditData(subTitle, userInfo.id, text)
            }} type={subTitle} />
        </div>
    )
}