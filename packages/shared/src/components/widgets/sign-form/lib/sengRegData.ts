import { Dispatch, UnknownAction } from "redux";
import { registrationUser } from "../../../../lib/helpers/registrationUser";
import { UserActionTypes } from "../../../../lib/enum/actions/userActionTypes";
import { ILoginResponse } from "./IloginResponse";
import { AxiosError } from 'axios'

export const sendRegData = async (
    name: string,
    surname: string,
    email: string,
    speciality: string,
    number_phone: string,
    password: string,
    dispatch: Dispatch<UnknownAction>
) => {
    const result = await registrationUser(name, surname, '', '', speciality, email, number_phone, password)
    const data = result['data']

    try {
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