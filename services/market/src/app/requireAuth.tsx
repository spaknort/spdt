import { useTypedSelector } from "@packages/shared"
import React, { ReactNode } from "react"
import { Navigate } from "react-router-dom"

export const RequireAuth: React.FC = (props: any) => {
    const isAuth = useTypedSelector(state => state.userReducer.isAuth)
    return isAuth === true ? props.children : <Navigate to="/sign-in" replace />
}