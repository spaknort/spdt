import { IFullUser } from "../../lib/interfaces/IFullUser"
import { IUser } from "../../lib/interfaces/IUser"

export interface IUserDefaultState {
    isAuth: boolean,
    userInfo: IUser,
    userFullInfo?: IFullUser,
    token: string
}