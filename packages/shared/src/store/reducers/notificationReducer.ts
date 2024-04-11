import { NotificationAction, NotificationActionTypes, NotificationItemTypes } from "../../index";
import { INotificationDefaultState } from '../lib/INotificationDefaultState'
import { searchNotificaionStateByItemTitle } from '../lib/searchNotificaionStateByItemTitle'

const NotificationDefaultState: INotificationDefaultState = {
    items: [
        { title: 'Item update notifications', type: NotificationItemTypes.OFF },
        { title: 'Item comment notifications', type: NotificationItemTypes.ON },
    ]
}
localStorage.setItem('notifications', JSON.stringify(NotificationDefaultState))

export const notificationReducer = (state = NotificationDefaultState, action: NotificationAction) => {
    switch (action.type) {
        case NotificationActionTypes.UPDATE_NOTIFICATION_ITEM:
            const result = searchNotificaionStateByItemTitle(state, action.item)
            localStorage.setItem('notifications', JSON.stringify(result))
            return { ...result }
        default: return { ...state }
    }
}