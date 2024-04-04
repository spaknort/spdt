import React from "react";
import { svgNames } from "../lib/enums/svgNames";
import { INavigationItem } from "../lib/interfaces/INavigationItem";
import { SvgSelector } from "../ui/svgSelector";

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
    },
    {
        id: 3,
        svg: <SvgSelector svgName={svgNames.signIn} />,
        title: 'Sign In',
        path: '/sign-in'
    }
]

export default NavigationPanel