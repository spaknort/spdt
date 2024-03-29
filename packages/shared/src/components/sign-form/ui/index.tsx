import React from 'react'
import { Button, ButtonSizes, ButtonTypes, Colours, InputForm, InputFormTypes, Title, TitleSizes } from '@packages/shared'
import { SignFormTypes } from '../../../lib/enum/signFormTypes'
import './index.sass'

interface SignFormProps {
    type: SignFormTypes,
    items: Array<{
        type: InputFormTypes
        lable: string,
        placeholder: string,
        required: boolean
    }>
}

export const SignForm: React.FC<SignFormProps> = ({ type, items }) => {
    const title = (type == SignFormTypes.signIn) ? 'Sign In': 'Sign Up'

    return (
        <div className="sign">
            <Title value={title} size={TitleSizes.big} />
            <p className="sign__sub-title">Enter your email and password to {title.toLocaleLowerCase()}!</p>
            <div className='sign__form'>
                {items.map(item => (
                    <InputForm
                        key={String(Date.now() * Math.random() + item.lable)}
                        type={item.type}
                        lable={item.lable}
                        placeholder={item.placeholder}
                        required={item.required}
                    />
                ))}
                <Button type={ButtonTypes.active} size={ButtonSizes.medium} styles={{ padding: '18px', borderRadius: '16px', marginTop: '12px', width: '98%' }} value={title} />
            </div>
            <p className="sign__link">Not registered yet? <a style={{ color: Colours.text_color, cursor: 'pointer' }} href="/sign-up">Create an Account</a></p>
        </div>
    )
}