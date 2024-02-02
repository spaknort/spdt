import React from 'react'
import { Button, ButtonSizes, ButtonTypes, InputForm, InputFormTypes, Title, TitleSizes } from '@packages/shared'
import './index.sass'

interface RegistrationFormProps {
    items: Array<{
        type: InputFormTypes
        lable: string,
        placeholder: string,
        required: boolean
    }>
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ items }) => {
    return (
        <div className="registration">
            <Title value='Sign Up' size={TitleSizes.medium} />
            <p className="registration__sub-title">Enter your email and password to sign in!</p>
            <form>
                {items.map(item => (
                    <InputForm type={item.type} lable={item.lable} placeholder={item.placeholder} required={item.required} />
                ))}
                <Button type={ButtonTypes.active} size={ButtonSizes.big} styles={{ padding: '24px' }} value='Sign Up' />
            </form>
        </div>
    )
}