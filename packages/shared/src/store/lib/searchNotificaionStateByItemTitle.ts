import { NotificationItemTypes } from '../../lib/enum/notificationItemTypes'
import { INotificationItem } from '../../lib/interfaces/INotificationItem'
import { INotificationDefaultState } from './INotificationDefaultState'

export const searchNotificaionStateByItemTitle = (state: INotificationDefaultState, elem: INotificationItem): INotificationDefaultState => {
    const newState: INotificationDefaultState = { items: [] }

    state.items.forEach(item => {
        if (item.title == elem.title) newState.items.push({ title: item.title, type: elem.type })
        else newState.items.push(item)
    })

    return newState
}