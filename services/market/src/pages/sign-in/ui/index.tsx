import React, { FC, useEffect } from "react"
import './index.sass'
import { Colours, helperForTheme, InputFormTypes, LightThemeColours, SignForm, useTypedSelector } from "@packages/shared"
import { SignFormTypes } from "@packages/shared/src/lib/enum/signFormTypes"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"

export const SignIn: FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const backgroundThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color

    useEffect(() => helperForTheme(theme, backgroundThemeStyle), [backgroundThemeStyle])

    return (
        <div className="sign-in">
            <SignForm type={SignFormTypes.signIn} items={[
                { type: InputFormTypes.email, lable: 'Email', placeholder: 'mail@simmmple.com', required: true },
                { type: InputFormTypes.password, lable: 'Password', placeholder: 'Min. 8 characters', required: true }
            ]} />
        </div>
    )
}