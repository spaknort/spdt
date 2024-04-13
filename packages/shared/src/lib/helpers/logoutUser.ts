import { AxiosResponse } from 'axios'
import { IAuthResponse } from '../../index'
import api from '../../config/axiosConfig'

export const logoutUser = async () => {
    api.post('/logout')
}