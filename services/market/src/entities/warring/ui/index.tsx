import React, { CSSProperties } from "react"
import './index.sass'
import { SvgSelector } from "@/shared/ui/svgSelector"
import { svgNames } from "@/shared/lib/enums/svgNames"
import { Colours, LightThemeColours, useTypedSelector } from "@packages/shared"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"

interface WarrningProps {
    text: string,
    background: CSSProperties['background']
}

export const Warrning: React.FC<WarrningProps> = ({ text, background }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const textThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color

    return (
        <div style={{ background }} className="warrning">
            <div className="warrning__content">
                <SvgSelector svgName={svgNames.warrning} params={{fill: Colours.active_color, width: 24, height: 24, styles: { flexShrink: 0 } }} />
                <p className="warrning__text" style={{ color: textThemeStyle }}>{ text }</p>
            </div>
        </div>
    )
}