import React, { useEffect } from 'react'
import './index.sass'
import { Colours, helperForTheme, InputTypes, LightThemeColours, SignForm, useTypedSelector } from '@packages/shared'
import { SignFormTypes } from '@packages/shared/src/lib/enum/signFormTypes'
import { ThemeTypes } from '@packages/shared/src/lib/enum/themeTypes'

export const SignUp: React.FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const backgroundThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color

    useEffect(() => helperForTheme(theme, backgroundThemeStyle), [backgroundThemeStyle])

    return (
        <div className="sign-up">
            <SignForm type={SignFormTypes.signUp} items={[
                { type: InputTypes.TEXT, lable: 'Name', placeholder: 'Ivan', required: true },
                { type: InputTypes.TEXT, lable: 'Surname', placeholder: 'Invanov', required: true },
                { type: InputTypes.EMAIL, lable: 'Email', placeholder: 'example@mail.com', required: true },
                { type: InputTypes.SELECTOR, lable: 'Account Type', placeholder: 'NFT Designer/Purchaser/Admin', required: true },
                { type: InputTypes.TEL, lable: 'Number Phone', placeholder: '+7 (000) 000 00-00', required: true },
                { type: InputTypes.PASSWORD, lable: 'Password', placeholder: 'Min. 8 characters', required: true },
            ]} />
        </div>
    )
}