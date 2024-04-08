import { combineReducers, createStore } from "redux"
import { themeReducer } from "./reducers/themeReducer"

const rootReducer = combineReducers({
   themeReducer
})

export type RootType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)