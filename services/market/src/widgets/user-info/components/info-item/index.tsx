import { Colours, LightThemeColours, Text, Title, TitleSizes, useTypedSelector } from "@packages/shared"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"
import React from "react"
import { IInfoItem } from "../../lib/IInfoItem"
import './index.sass'

export const InfoItem: React.FC<IInfoItem> = ({ title, subTitle }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const InfoItemThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color

    return (
        <div style={{ background: InfoItemThemeStyle }} className="info-item">
            <Text value={subTitle} size={0.875} />
            <Title value={title} size={TitleSizes.small} />
        </div>
    )
}