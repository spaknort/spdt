import { generalSvgNames, GeneralSvgSelector, useTypedSelector } from "@packages/shared"
import React from "react"
import './index.sass'
import { sendEditData } from "@/widgets/user-info/api/sendEditData"

interface EditProps {
    type: string,
    onClick: () => void
}

export const Edit: React.FC<EditProps> = ({ type, onClick }) => {
    return (
        <button onClick={onClick} className="edit">
            <GeneralSvgSelector svgName={generalSvgNames.edit} />
        </button>
    )
}