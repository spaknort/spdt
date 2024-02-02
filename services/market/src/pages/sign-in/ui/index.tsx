import React, { FC } from "react"
import './index.sass'
import { InputFormTypes, RegistrationForm } from "@packages/shared"

export const SignIn: FC = () => {
    return (
        <div className="sign-in">
            <RegistrationForm items={[
                { type: InputFormTypes.text, lable: 'Full name', placeholder: 'Name Surname', required: true },
                { type: InputFormTypes.email, lable: 'Surname', placeholder: 'Your surname', required: true },
                { type: InputFormTypes.email, lable: 'Email', placeholder: 'mail@simmmple.com', required: true },
                { type: InputFormTypes.email, lable: 'Email', placeholder: 'mail@simmmple.com', required: true },
                { type: InputFormTypes.password, lable: 'Password', placeholder: 'Min. 8 characters', required: true }
            ]} />
        </div>
    )
}