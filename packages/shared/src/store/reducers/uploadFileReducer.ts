import { IParsedFile, UploadFileAction, UploadFileActionTypes } from '../../index'

interface IUploadFileDefaultState {
    data: Array<IParsedFile>
}

const uploadFileDefaultState: IUploadFileDefaultState = {
    data: JSON.parse(localStorage.getItem('uploadFiles')) || []
}

export const uploadFileReducer = (state = uploadFileDefaultState, action: UploadFileAction) => {
    switch (action.type) {
        case UploadFileActionTypes.ADD_UPLOAD_FILE:
            localStorage.setItem('uploadFiles', JSON.stringify(action.data))
            return { ...state, data: action.data }
        case UploadFileActionTypes.DELETE_UPLOAD_FILE:
            const newFilteredStateData = state.data.filter(item => item.name != action.name)
            localStorage.setItem('uploadFiles', JSON.stringify(newFilteredStateData))
            return { ...state, data: newFilteredStateData }
        default: return { ...state }
    }
}