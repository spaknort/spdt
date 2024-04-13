import { IUserDefaultState } from '../lib/IUserDefaultState'
import { UserAction, UserActionTypes } from '../../index'

const userDefaultState: IUserDefaultState = {
    isAuth: JSON.parse(localStorage.getItem('isAuth') as string) || false,
    userInfo: JSON.parse(localStorage.getItem('userInfo') as string) || {},
    token: localStorage.getItem('token') || ''
}

export const userReducer = (state = userDefaultState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.SET_AUTH:
            localStorage.setItem('isAuth', String(action.isAuth))
            return { ...state, isAuth: action.isAuth }
        case UserActionTypes.SET_TOKEN:
            localStorage.setItem('token', action.token)
            return { ...state, token: action.token }
        case UserActionTypes.SET_USER_INFO:
            localStorage.setItem('userInfo', JSON.stringify(action.userInfo))
            return { ...state, userInfo: action.userInfo }
        default: return { ...state }
    }
}