import React from "react"
import './index.sass'
import { INotificationItem, NotificationActionTypes, NotificationItemTypes, Switch, Text } from "@packages/shared"
import { useDispatch } from "react-redux"

export const NotificationItem: React.FC<INotificationItem> = ({ title, type }) => {
    const dispatch = useDispatch()

    return (
        <div className="notification-item">
            <Switch onClick={() => {
                dispatch({ type: NotificationActionTypes.UPDATE_NOTIFICATION_ITEM, item: { title, type } })
            }} state={(type == NotificationItemTypes.ON)} />
            <Text value={title} size={1} />
        </div>
    )
}