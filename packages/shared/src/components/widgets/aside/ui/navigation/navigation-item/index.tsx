import React, { FC } from 'react'
import './index.sass'
import { Colours, IFullUser, IUser, LightThemeColours, logoutUser, UserActionTypes, useTypedSelector } from '@packages/shared'
import { Link } from 'react-router-dom'
import { ThemeTypes } from '../../../../../../lib/enum/themeTypes'
import { useDispatch } from 'react-redux'

interface NavigationItem {
    svg: any,
    title: string,
    path: string
}

export const NavigationItem: FC<NavigationItem> = ({ svg, title, path }) => {
    const dispatch = useDispatch()
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const navigationItemThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color

    function checkLogOut(e: any) {
        if (path == '/logout') {
            e.preventDefault()
            logoutUser()
            dispatch({ type: UserActionTypes.SET_AUTH, isAuth: false })
            dispatch({ type: UserActionTypes.SET_TOKEN, token: '' })
            dispatch({ type: UserActionTypes.SET_USER_INFO, userInfo: {} as IUser })
            dispatch({ type: UserActionTypes.SET_USER_FULL_INFO, userFullInfo: {} as IFullUser })
        }
    }

    return (
        <Link style={{ color: navigationItemThemeStyle }} onClick={checkLogOut} className='aside__nav-item' to={path} >
            { svg }
            <span>{ title }</span>
        </Link>
    )
}