import React, { useEffect } from 'react'
import './index.sass'
import { Colours, InputFormTypes, LightThemeColours, SignForm, useTypedSelector } from '@packages/shared'
import { SignFormTypes } from '@packages/shared/src/lib/enum/signFormTypes'
import { ThemeTypes } from '@packages/shared/src/lib/enum/themeTypes'

export const SignUp: React.FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const backgroundThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color

    useEffect(() => {
        const rootElem = document.getElementById('root')
        rootElem.style.cssText =  `
            background-color: ${backgroundThemeStyle}
        `
    }, [])

    return (
        <div className="sign-up">
            <SignForm type={SignFormTypes.signUp} items={[
                { type: InputFormTypes.text, lable: 'Full Name', placeholder: 'Invanov Ivan Ivanovi', required: true },
                { type: InputFormTypes.email, lable: 'Email', placeholder: 'example@mail.com', required: true },
                { type: InputFormTypes.selector, lable: 'Account Type', placeholder: 'NFT Designer/Purchaser/Admin', required: true },
                { type: InputFormTypes.tel, lable: 'Number Phone', placeholder: '+7 (000) 000 00-00', required: true },
                { type: InputFormTypes.password, lable: 'Password', placeholder: 'Min. 8 characters', required: true },
            ]} />
        </div>
    )
}