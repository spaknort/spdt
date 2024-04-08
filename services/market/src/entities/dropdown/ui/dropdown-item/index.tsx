import React, { EventHandler, useEffect, useRef, useState } from "react"
import { SvgSelector } from "@/shared/ui/svgSelector"
import { svgNames } from "@/shared/lib/enums/svgNames"
import { Colours, LightThemeColours, useTypedSelector } from "@packages/shared"
import './index.sass'
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"

interface DropDownItemProps {
    item: {
        svgName: svgNames,
        value: string,
        content: Array<{key: string, value: string}>
    }
}

export const DropDownItem: React.FC<DropDownItemProps> = ({ item }) => {
    const [itemState, setItemState] = useState<boolean>(false)
    const listRef = useRef<HTMLUListElement | null>(null)

    const theme = useTypedSelector(state => state.themeReducer.theme)
    const itemThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color

    useEffect(() => {
        if (listRef == null) return
        const listRefCurrent = listRef.current;
        
        (itemState) ? listRefCurrent.style.maxHeight = listRefCurrent.scrollHeight + 'px':
        listRefCurrent.style.maxHeight = '0px'
    }, [itemState])

    return (
        <li className="dropdown__item">
            <div className="dropdown__drop" onClick={() => {
                setItemState(!itemState)
            }}>
                <div className="dropdown__drop-title">
                    <SvgSelector svgName={item.svgName} />
                    <span style={{ color: itemThemeStyle }} className="dropdown__drop-value">{ item.value }</span>
                </div>
                <SvgSelector svgName={svgNames.dropDownArrow} params={{ width: 24, height: 24 }} />
            </div>
            <ul ref={listRef} className={"dropdown__list"}>
                {
                    item.content.map(sub_item => {
                        return (
                            <li key={sub_item.key} className="dropdown__sub-item">
                                <span className="dropdown__sub-item__key">{ sub_item.key }</span>
                                <span style={{ color: itemThemeStyle }} className="dropdown__sub-item__value">{ sub_item.value }</span>
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    )
}