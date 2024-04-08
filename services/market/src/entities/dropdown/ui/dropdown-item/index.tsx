import React, { EventHandler, useEffect, useRef, useState } from "react"
import { SvgSelector } from "@/shared/ui/svgSelector"
import { svgNames } from "@/shared/lib/enums/svgNames"
import { Colours } from "@packages/shared"
import './index.sass'

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
                    <span style={{ color: Colours.text_color }} className="dropdown__drop-value">{ item.value }</span>
                </div>
                <SvgSelector svgName={svgNames.dropDownArrow} params={{ width: 24, height: 24, fill: '', stroke: Colours.text_color }} />
            </div>
            <ul ref={listRef} className={"dropdown__list"}>
                {
                    item.content.map(sub_item => {
                        return (
                            <li key={sub_item.key} className="dropdown__sub-item">
                                <span className="dropdown__sub-item__key">{ sub_item.key }</span>
                                <span style={{ color: Colours.text_color }} className="dropdown__sub-item__value">{ sub_item.value }</span>
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    )
}