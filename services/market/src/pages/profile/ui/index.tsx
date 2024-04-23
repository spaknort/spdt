import React, { FC, useEffect, useState } from "react"
import './index.sass'
import { Aside, Colours, Header, IFullUser, LightThemeColours, UserActionTypes, checkAuth, getTitleForCurrentPage, helperForTheme, useTypedSelector } from "@packages/shared"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"
import NavigationPanel from "@/shared/config/UIConfig"
import { UserCard } from "@/widgets/user-card"
import { UserStorage } from "@/widgets/user-storage"
import { UploadFiles } from "@/widgets/upload-files"
import { UserInfo } from "@/widgets/user-info"
import { UserProjects } from "@/widgets/user-projects"
import { UserNotifications } from "@/widgets/user-notifications"
import { useDispatch } from "react-redux"
import { getUserById } from "../api/getUserById"
import { SendFiles } from "@/widgets/send-files"

export const Profile: FC = () => {
    const dispatch = useDispatch()
    const isAuth = useTypedSelector(state => state.userReducer.isAuth)
    const userInfo = useTypedSelector(state => state.userReducer.userInfo)
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const backgroundThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color
    const titleForCurrentPage = getTitleForCurrentPage()

    useEffect(() => helperForTheme(theme, backgroundThemeStyle), [backgroundThemeStyle])

    useEffect(() => {
        if (localStorage.getItem('token')) checkAuth(dispatch)
        getUserById(userInfo.id).then((result: IFullUser) => dispatch({ type: UserActionTypes.SET_USER_FULL_INFO, userFullInfo: result }))
    }, [])

    return (
        <div className="profile">
            <SendFiles />
            <Aside items={ NavigationPanel } />
            <div className="contents">
                <Header title={ titleForCurrentPage } subTitle={`Pages / ${titleForCurrentPage}`} />
                <main className="main main-profile">
                    <div className="main-profile__flex-container">
                        <UserCard />
                        <UserStorage />
                        <UploadFiles />
                    </div>
                    <div className="main-profile__flex-container">
                        <UserProjects />
                        <UserInfo />
                        <UserNotifications />
                    </div>
                </main>
            </div>
        </div>
    )
}