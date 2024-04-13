import axios, { AxiosError } from 'axios'
import { Dispatch, UnknownAction } from 'redux'
import { UserActionTypes, IAuthResponse } from '../../index'
import { ILoginResponse } from '../../components/widgets/sign-form/lib/IloginResponse'

export const checkAuth = async (dispatch: Dispatch<UnknownAction>) => {
    try {
        const result = await axios.get<IAuthResponse>(`http://localhost:5000/refresh`, { withCredentials: true })
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