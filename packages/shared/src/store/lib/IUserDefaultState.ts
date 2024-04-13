import { IUser } from "../../lib/interfaces/IUser"

export interface IUserDefaultState {
    isAuth: boolean,
    userInfo: IUser
    token: string
}