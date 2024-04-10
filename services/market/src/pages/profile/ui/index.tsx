import React, { FC, useEffect } from "react"
import './index.sass'
import { Aside, Colours, Header, LightThemeColours, getTitleForCurrentPage, useTypedSelector } from "@packages/shared"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"
import NavigationPanel from "@/shared/config/UIConfig"
import { UserCard } from "@/widgets/user-card"
import { UserStorage } from "@/widgets/user-storage"

export const Profile: FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const backgroundThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color
    const titleForCurrentPage = getTitleForCurrentPage()

    useEffect(() => {
        const rootElem = document.getElementById('root')
        rootElem.style.cssText =  `
            background-color: ${backgroundThemeStyle}
        `
    }, [backgroundThemeStyle])

    return (
        <div className="profile">
            <Aside items={ NavigationPanel } />
            <div className="contents">
                <Header title={ titleForCurrentPage } subTitle={`Pages / ${titleForCurrentPage}`} />
                <main className="main main-profile">
                    <UserCard />
                    <UserStorage />
                </main>
            </div>
        </div>
    )
}