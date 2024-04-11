import React, { useEffect, useState } from "react"
import './index.sass'
import { INotificationItem, NotificationActionTypes, NotificationItemTypes, Switch, Text, useTypedSelector } from "@packages/shared"
import { useDispatch } from "react-redux"

export const NotificationItem: React.FC<INotificationItem> = ({ title, type }) => {
    const dispatch = useDispatch()
    const notifi = useTypedSelector(state => state.notificationReducer.items)
    const [isChecked, setIsChecked] = useState<boolean>(type)

    return (
        <div onClick={() => {
            dispatch({ type: NotificationActionTypes.UPDATE_NOTIFICATION_ITEM, item: { title, type: !isChecked } })
            setIsChecked(!isChecked)
        }} className="notification-item">
            <Switch state={isChecked} />
            <Text value={title} size={1} />
        </div>
    )
}