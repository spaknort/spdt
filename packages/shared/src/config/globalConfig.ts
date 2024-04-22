import { InputTypes } from "../lib/enum/inputTypes"

export const userTypes: Array<string> = [
    'NFT Designer',
    'Purchaser',
    'Admin'
]

interface ISendFileField {
    type: InputTypes,
    placeholder: string,
    label: string
}

export const SendFileFields: Array<ISendFileField> = [
    { type: InputTypes.TEXT, placeholder: 'The product`s name', label: 'Title' },
    { type: InputTypes.FILE, placeholder: 'Select a file', label: 'File' },
    { type: InputTypes.TEXT, placeholder: 'Specify price', label: 'Price' }
]

export enum LocalRoutes {
    start = '/',
    product = '/product',
    profile = '/profile',
    signUp = '/sign-up',
    signIn = '/sign-in'
}