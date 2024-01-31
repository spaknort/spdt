import React, { CSSProperties } from "react"
import './index.sass'
import { SvgSelector } from "@/shared/ui/svgSelector"
import { svgNames } from "@/shared/lib/enums/svgNames"
import { Colours } from "@packages/shared"

interface WarrningProps {
    text: string,
    background: CSSProperties['background']
}

export const Warrning: React.FC<WarrningProps> = ({ text, background }) => {
    return (
        <div style={{ background }} className="warrning">
            <div className="warrning__content">
                <SvgSelector svgName={svgNames.warrning} params={{fill: Colours.active_color, width: 24, height: 24, styles: {flexShrink: 0} }} />
                <p className="warrning__text" style={{ color: Colours.text_color }}>{ text }</p>
            </div>
        </div>
    )
}