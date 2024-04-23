import React from "react";
import { svgNames } from "../lib/enums/svgNames";
import { INavigationItem } from "../lib/interfaces/INavigationItem";
import { SvgSelector } from "../ui/svgSelector";
import { InputTypes, useTypedSelector } from "@packages/shared";

const NavigationPanel: Array<INavigationItem> = [
    {
        id: 1,
        svg: <SvgSelector svgName={svgNames.market} />,
        title: 'NFTs Marketplace',
        path: '/'
    },
    {
        id: 2,
        svg: <SvgSelector svgName={svgNames.profile} />,
        title: 'Profile',
        path: '/profile'
    }
]

interface ISendFileField {
    type: InputTypes,
    placeholder: string,
    label: string
}

export const SendFileFields: Array<ISendFileField> = [
    { type: InputTypes.TEXT, placeholder: 'The product`s name', label: 'Title' },
    { type: InputTypes.FILE, placeholder: 'Select a file', label: 'File' },
    { type: InputTypes.TEXT, placeholder: 'Specify price', label: 'Price' }
]


export default NavigationPanel