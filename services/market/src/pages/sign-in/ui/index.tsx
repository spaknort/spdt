import React, { FC } from "react"
import './index.sass'
import { InputFormTypes, SignForm } from "@packages/shared"
import { SignFormTypes } from "@packages/shared/src/lib/enum/signFormTypes"

export const SignIn: FC = () => {
    return (
        <div className="sign-in">
            <SignForm type={SignFormTypes.signIn} items={[
                { type: InputFormTypes.email, lable: 'Email', placeholder: 'mail@simmmple.com', required: true },
                { type: InputFormTypes.password, lable: 'Password', placeholder: 'Min. 8 characters', required: true }
            ]} />
        </div>
    )
}