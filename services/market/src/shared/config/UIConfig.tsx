import React from "react";
import { svgNames } from "../lib/enums/svgNames";
import { INavigationItem } from "../lib/interfaces/INavigationItem";
import { SvgSelector } from "../ui/svgSelector";
import { useTypedSelector } from "@packages/shared";

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

export default NavigationPanel