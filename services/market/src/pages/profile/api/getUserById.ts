import { IFullUser } from "@packages/shared"
import api from "@packages/shared/src/config/axiosConfig"

export const getUserById = async (id: number): Promise<IFullUser> => {
    const result = await api.get(`user/${id}`)
    return result['data']
}