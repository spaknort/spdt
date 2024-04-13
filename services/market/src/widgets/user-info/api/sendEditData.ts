import api from "@packages/shared/src/config/axiosConfig";

export const sendEditData = (type: string, userId: number, value: string) => {
    const words = type.split(' ')
    const path = (words.length > 1) ? '/user/edit/' + words.join('_').toLowerCase(): '/user/edit/' + words[0].toLowerCase()

    api.put(path + `/${value}`, {
        userId
    })
}