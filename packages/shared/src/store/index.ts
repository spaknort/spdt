import { combineReducers, createStore } from "redux"
import { themeReducer } from "./reducers/themeReducer"
import { uploadFileReducer } from './reducers/uploadFileReducer'

const rootReducer = combineReducers({
   themeReducer,
   uploadFileReducer
})

export type RootType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)