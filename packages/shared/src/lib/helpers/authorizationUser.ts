import { AxiosResponse } from 'axios'
import { IAuthResponse } from '../../index'
import api from '../../config/axiosConfig'

export const authorizationUser = async (email: string, password: string): Promise<AxiosResponse<IAuthResponse>> => {
    return api.post<IAuthResponse>('/login', { email, password })
}