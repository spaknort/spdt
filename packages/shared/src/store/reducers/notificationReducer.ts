import { NotificationAction, NotificationActionTypes, NotificationItemTypes } from "../../index";
import { INotificationDefaultState } from '../lib/INotificationDefaultState'
import { searchNotificaionStateByItemTitle } from '../lib/searchNotificaionStateByItemTitle'

const NotificationDefaultState: INotificationDefaultState = JSON.parse(localStorage.getItem('notifications')) || {
    items: [
        { title: 'Item update notifications', type: false },
        { title: 'Item comment notifications', type: false },
        { title: 'Buyer review notifications', type: false },
        { title: 'Rating reminders notifications', type: false },
        { title: 'Meetups near you notifications', type: false },
        { title: 'Company news notifications', type: false },
        { title: 'New launches and projects', type: false },
        { title: 'Monthly product changes', type: false },
        { title: 'Subscribe to newsletter', type: false },
        { title: 'Email me when someone follows me', type: false }
    ]
}
// localStorage.setItem('notifications', JSON.stringify(NotificationDefaultState))

export const notificationReducer = (state = NotificationDefaultState, action: NotificationAction) => {
    switch (action.type) {
        case NotificationActionTypes.UPDATE_NOTIFICATION_ITEM:
            const result = searchNotificaionStateByItemTitle(state, action.item)
            console.log(result, ' - result')
            localStorage.setItem('notifications', JSON.stringify(result))
            return { ...result }
        default: return { ...state }
    }
}