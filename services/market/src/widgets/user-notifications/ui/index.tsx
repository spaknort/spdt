import { Colours, LightThemeColours, Title, TitleSizes, useTypedSelector } from "@packages/shared"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"
import React from "react"
import './index.sass'
import { NotificationItem } from "../components/notification-item"

export const UserNotifications: React.FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const notifications = useTypedSelector(state => state.notificationReducer.items)
    const UserNotificationsThemeStyle = (theme == ThemeTypes.DARK) ? Colours.block_color: LightThemeColours.block_color

    return (
        <div style={{ background: UserNotificationsThemeStyle }} className="user-notifications">
            <Title value="Notifications" size={TitleSizes.medium} />
            <div className="user-notifications__items">
                {
                    notifications.map(item => (
                        <NotificationItem title={item.title} type={item.type} key={item.title} />
                    ))
                }
            </div>
        </div>
    )
}