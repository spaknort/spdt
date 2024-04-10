import React, { FC, useEffect } from "react"
import './index.sass'
import { Aside, Colours, Header, LightThemeColours, getTitleForCurrentPage, helperForTheme, useTypedSelector } from "@packages/shared"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"
import NavigationPanel from "@/shared/config/UIConfig"
import { UserCard } from "@/widgets/user-card"
import { UserStorage } from "@/widgets/user-storage"
import { UploadFiles } from "@/widgets/upload-files"

export const Profile: FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const backgroundThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color
    const titleForCurrentPage = getTitleForCurrentPage()

    useEffect(() => helperForTheme(theme, backgroundThemeStyle), [backgroundThemeStyle])

    return (
        <div className="profile">
            <Aside items={ NavigationPanel } />
            <div className="contents">
                <Header title={ titleForCurrentPage } subTitle={`Pages / ${titleForCurrentPage}`} />
                <main className="main main-profile">
                    <div className="main-profile__flex-container">
                        <UserCard />
                        <UserStorage />
                        <UploadFiles />
                    </div>
                </main>
            </div>
        </div>
    )
}