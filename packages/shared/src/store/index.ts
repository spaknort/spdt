import { combineReducers, createStore } from "redux"
import { themeReducer } from "./reducers/themeReducer"
import { uploadFileReducer } from './reducers/uploadFileReducer'
import { notificationReducer } from "./reducers/notificationReducer"
import { userReducer } from "./reducers/userReducer"

const rootReducer = combineReducers({
   themeReducer,
   uploadFileReducer,
   notificationReducer,
   userReducer
})

export type RootType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)