import { AxiosResponse } from 'axios'
import { IAuthResponse } from '../../index'
import api from '../../config/axiosConfig'

export const registrationUser = async (
    name: string,
    surname: string,
    avatar: string,
    text: string,
    speciality: string,
    email: string,
    number_phone: string,
    password: string,
): Promise<AxiosResponse<IAuthResponse>> => {
    return api.post<IAuthResponse>('/registration', { name, surname, avatar, text, speciality, email, number_phone, password })
}