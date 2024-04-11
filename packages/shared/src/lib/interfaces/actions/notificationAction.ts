import { NotificationActionTypes } from "../../enum/actions/notificationActionTypes";
import { INotificationItem } from "../INotificationItem";

export interface NotificationAction {
    type: NotificationActionTypes,
    item: INotificationItem
}