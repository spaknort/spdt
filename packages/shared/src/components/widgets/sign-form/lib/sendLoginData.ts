import { Dispatch, UnknownAction } from 'redux'
import { authorizationUser, UserActionTypes } from '../../../../index'
import { ILoginResponse } from './IloginResponse'
import { AxiosError } from 'axios'

export const sendLoginData = async (email: string, password: string, dispatch: Dispatch<UnknownAction>): Promise<AxiosError | ILoginResponse> => {
    try {
        const result = await authorizationUser(email, password)
        const data = result['data']

        dispatch({ type: UserActionTypes.SET_AUTH, isAuth: true })
        dispatch({ type: UserActionTypes.SET_TOKEN, token: data.accessToken })
        dispatch({ type: UserActionTypes.SET_USER_INFO, userInfo: data.user })

        return { status: true } as ILoginResponse
    } catch (e) {
        return {
            isAxiosError: true,
            // @ts-ignore
            message: e.response.data
        } as AxiosError
    }
}