import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ButtonSizes, ButtonTypes, Colours, InputForm, InputFormTypes, LightThemeColours, Title, TitleSizes, useTypedSelector } from '@packages/shared'
import { SignFormTypes } from '../../../../lib/enum/signFormTypes'
import { Link } from 'react-router-dom'
import './index.sass'
import { ThemeTypes } from '../../../../lib/enum/themeTypes'
import { sendLoginData } from '../lib/sendLoginData'
import { sendRegData } from '../lib/sengRegData'
import { useDispatch } from 'react-redux'

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
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const title = (type == SignFormTypes.signIn) ? 'Sign In': 'Sign Up'
    const textThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color

    function sendData () {
        if (type == SignFormTypes.signIn) {
            sendLoginData(
                localStorage.getItem('signInEmail') as string,
                localStorage.getItem('signInPassword') as string,
                dispatch
            ).then(result => {
                if (result.status !== undefined) navigate('/')
            })
        }
        else {
            sendRegData(
                localStorage.getItem('signInName'),
                localStorage.getItem('signInSurname'),
                localStorage.getItem('signInEmail'),
                localStorage.getItem('signInAccoutType'),
                localStorage.getItem('signInNumber'),
                localStorage.getItem('signInPassword'),
                dispatch
            ).then(result => {
                console.log(result)
            })
        }
    }

    return (
        <div className="sign">
            <Title value={title} size={TitleSizes.big} />
            <p className="sign__sub-title">Enter your email and password to {title.toLocaleLowerCase()}!</p>
            <div style={{ height: (type == SignFormTypes.signIn) ? 'max-content': '70vh' }} className='sign__form'>
                {items.map(item => (
                    <InputForm
                        key={String(Date.now() * Math.random() + item.lable)}
                        type={item.type}
                        lable={item.lable}
                        placeholder={item.placeholder}
                        required={item.required}
                    />
                ))}
                <Button onClick={sendData} type={ButtonTypes.active} size={ButtonSizes.medium} styles={{ padding: '18px', borderRadius: '16px', marginTop: '12px', width: '98%' }} value={title} />
            </div>
            {
                (type == SignFormTypes.signIn) ?
                    <p className="sign__link">Not registered yet? <Link style={{ color: textThemeStyle, cursor: 'pointer' }} to="/sign-up">Create an Account</Link></p>:
                    <p className="sign__link">Already registered? <Link style={{ color: textThemeStyle, cursor: 'pointer' }} to="/sign-in">Log In to your account</Link></p>
            }
        </div>
    )
}