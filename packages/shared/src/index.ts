export { Aside } from './components/widgets/aside'
export { Header } from './components/widgets/header'
export { Title } from './components/shared/title'
export { Button } from './components/shared/button'
export { Text } from './components/shared/text'
export { SignForm } from './components/widgets/sign-form'
export { InputForm } from './components/features/input-form'
export { SearchPanel } from './components/widgets/search-panel'
export { ProgressBar } from './components/entites/progress-bar'
export { Switch } from './components/shared/switch'
export { Cross } from './components/shared/cross'
export { Input } from './components/shared/input'
export { GeneralSvgSelector } from './components/generalSvgSelector'
export const Colours = {
    background_color: '#0B1437',
    background_light_color: '#0b2382',
    block_color: '#111C44',
    text_color: '#fafafa',
    active_color: '#7551FF'
}
export const LightThemeColours = {
    background_color: '#F4F7FE',
    background_light_color: '#4f5b8b',
    text_color: '#2B3674',
    block_color: '#ffffff',
    active_color: '#7551FF'
}
export * as Style from './styles/style.sass'
export * as Reset from './styles/reset.sass'
export { TitleSizes } from './lib/enum/titleSizes'
export { ButtonTypes } from './lib/enum/buttonTypes'
export { ButtonSizes } from './lib/enum/buttonSizes'
export { InputFormTypes } from './lib/enum/inputTypes'
export { generalSvgNames } from './lib/enum/generalSvgNames'
export { ProgressBarTypes } from './lib/enum/progressBarTypes'
export { NotificationItemTypes } from './lib/enum/notificationItemTypes'
export type { UploadFileAction } from './lib/interfaces/actions/uploadFileAction'
export { UploadFileActionTypes } from './lib/enum/actions/uploadFileActionTypes'
export type { UserAction } from './lib/interfaces/actions/userAction'
export { UserActionTypes } from './lib/enum/actions/userActionTypes'
export { NotificationActionTypes } from './lib/enum/actions/notificationActionTypes'
export type { NotificationAction } from './lib/interfaces/actions/notificationAction'
export type { IParsedFile } from './lib/interfaces/IParsedFile'
export type { INotificationItem } from './lib/interfaces/INotificationItem'
export type { IUser } from './lib/interfaces/IUser'
export type { IAuthResponse } from './lib/interfaces/IAuthResponse'
export type { ThemeActionTypes } from './lib/enum/actions/themeActionTypes'
export type { IFullUser } from './lib/interfaces/IFullUser'
export { userTypes } from './config/globalConfig'
export { getTitleForCurrentPage } from './lib/helpers/getTitleForCurrentPage'
export { helperForTheme } from './lib/helpers/helperForTheme'
export { useTypedSelector } from './lib/hooks/useTypedSelector'
export { authorizationUser } from './lib/helpers/authorizationUser'
export { registrationUser } from './lib/helpers/registrationUser'
export { checkAuth } from './lib/helpers/checkAuth'
export { logoutUser } from './lib/helpers/logoutUser'