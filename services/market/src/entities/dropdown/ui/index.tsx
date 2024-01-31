import React from "react"
import { DropDownItem } from "./dropdown-item"
import { svgNames } from "@/shared/lib/enums/svgNames"

interface DropDownProps {
    items: Array<{
        svgName: svgNames,
        value: string,
        content: Array<{key: string, value: string}>
    }>
}

export const DropDown: React.FC<DropDownProps> = ({ items }) => {
    return (
        <ul className="dropdown">
            { items.map(item => <DropDownItem item={item} />) }
        </ul>
    )
}