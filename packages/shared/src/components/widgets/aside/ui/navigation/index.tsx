import React, { FC } from 'react'
import { NavigationItem } from './navigation-item'
import { INavigationItem } from '../../../../../lib/interfaces/INavigationItem'
import './index.sass'
import { SvgSelector } from '@/shared/ui/svgSelector'
import { svgNames } from '@/shared/lib/enums/svgNames'
import { useTypedSelector } from '../../../../../lib/hooks/useTypedSelector'

interface NavigationProps {
    items: Array<INavigationItem>
}

export const Navigation: FC<NavigationProps> = ({ items }) => {
    const isAuth = useTypedSelector(state => state.userReducer.isAuth)
    const signInOutItem: INavigationItem = {
        id: 3,
        svg: <SvgSelector svgName={svgNames.signIn} />,
        title: (isAuth) ? 'Exit': 'Sign In',
        path: (isAuth) ? '/logout': '/sign-in'
    }
    const newItems = [ ...items, signInOutItem ]

    return (
        <nav className="aside__nav">
            {
                newItems.map(item => (
                    <NavigationItem key={String( Date.now() * item.id )} svg={item.svg} path={item.path} title={item.title} />
                ))
            }
        </nav>
    )
}