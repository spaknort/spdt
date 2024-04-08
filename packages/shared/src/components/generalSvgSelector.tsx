import React, { CSSProperties } from 'react'
import { generalSvgNames } from '../lib/enum/generalSvgNames'
import { useTypedSelector } from '../lib/hooks/useTypedSelector'
import { ThemeTypes } from '../lib/enum/themeTypes'
import { Colours, LightThemeColours } from '..'

interface generalSvgSelectorProps {
    svgName: generalSvgNames,
    className?: string,
    onClick?: () => void,
    styles?: CSSProperties,
    params?: {
        width: number,
        height: number,
        fill?: string,
        stroke?: string
    }
}

export const GeneralSvgSelector = ({ svgName, className, styles, onClick, params = {width: 18, height: 18, fill: '#fafafa', stroke: '#fafafa'} }: generalSvgSelectorProps): React.JSX.Element => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const defaultFill = params.fill || (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color
    const defaultStroke = params.stroke || (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color

    switch (svgName) {
        case generalSvgNames.eye:
            return (
                <svg style={{ ...styles }} onClick={onClick} className={className} width={params.width} height={params.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_561_787)">
                        <path d="M9.99992 5.41667C13.1583 5.41667 15.9749 7.19167 17.3499 10C15.9749 12.8083 13.1666 14.5833 9.99992 14.5833C6.83325 14.5833 4.02492 12.8083 2.64992 10C4.02492 7.19167 6.84158 5.41667 9.99992 5.41667ZM9.99992 3.75C5.83325 3.75 2.27492 6.34167 0.833252 10C2.27492 13.6583 5.83325 16.25 9.99992 16.25C14.1666 16.25 17.7249 13.6583 19.1666 10C17.7249 6.34167 14.1666 3.75 9.99992 3.75ZM9.99992 7.91667C11.1499 7.91667 12.0833 8.85 12.0833 10C12.0833 11.15 11.1499 12.0833 9.99992 12.0833C8.84992 12.0833 7.91658 11.15 7.91658 10C7.91658 8.85 8.84992 7.91667 9.99992 7.91667ZM9.99992 6.25C7.93325 6.25 6.24992 7.93333 6.24992 10C6.24992 12.0667 7.93325 13.75 9.99992 13.75C12.0666 13.75 13.7499 12.0667 13.7499 10C13.7499 7.93333 12.0666 6.25 9.99992 6.25Z" fill="#A3AED0"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_561_787">
                            <rect width={params.width} height={params.height} fill={defaultFill}/>
                        </clipPath>
                    </defs>
                </svg>
            )
        case generalSvgNames.crossedEye:
            return (
                <svg style={{ ...styles }} onClick={onClick} className={className} width={params.width} height={params.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 6L16 14" stroke={defaultStroke}/>
                        <g clipPath="url(#clip0_561_784)">
                    <path d="M9.99992 5.41667C13.1583 5.41667 15.9749 7.19167 17.3499 10C15.9749 12.8083 13.1666 14.5833 9.99992 14.5833C6.83325 14.5833 4.02492 12.8083 2.64992 10C4.02492 7.19167 6.84158 5.41667 9.99992 5.41667ZM9.99992 3.75C5.83325 3.75 2.27492 6.34167 0.833252 10C2.27492 13.6583 5.83325 16.25 9.99992 16.25C14.1666 16.25 17.7249 13.6583 19.1666 10C17.7249 6.34167 14.1666 3.75 9.99992 3.75ZM9.99992 7.91667C11.1499 7.91667 12.0833 8.85 12.0833 10C12.0833 11.15 11.1499 12.0833 9.99992 12.0833C8.84992 12.0833 7.91658 11.15 7.91658 10C7.91658 8.85 8.84992 7.91667 9.99992 7.91667ZM9.99992 6.25C7.93325 6.25 6.24992 7.93333 6.24992 10C6.24992 12.0667 7.93325 13.75 9.99992 13.75C12.0666 13.75 13.7499 12.0667 13.7499 10C13.7499 7.93333 12.0666 6.25 9.99992 6.25Z" fill="#A3AED0"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_561_784">
                            <rect width={params.width} height={params.height} fill={defaultFill}/>
                        </clipPath>
                    </defs>
                </svg>
            )
        case generalSvgNames.searchInput:
            return (
                <svg style={{ ...styles }} onClick={onClick} className={className} width={params.width} height={params.height} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4.3" stroke={defaultStroke} strokeWidth="1.4" />
                    <line x1="10.0101" y1="11" x2="8" y2="8.98995" stroke={defaultStroke} strokeWidth="1.4"
                        strokeLinecap="round" />
                </svg>
            )
        case generalSvgNames.darkTheme:
            return (
                <svg style={{ ...styles }} onClick={onClick} className={className} width={params.width} height={params.height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_555_638)">
                        <path d="M9.95691 18C12.7329 18 15.2683 16.737 16.948 14.6675C17.1965 14.3613 16.9255 13.9141 16.5415 13.9872C12.175 14.8188 8.1651 11.4709 8.1651 7.06303C8.1651 4.52398 9.52431 2.18914 11.7334 0.931992C12.0739 0.738211 11.9883 0.221941 11.6013 0.150469C11.0589 0.0504468 10.5085 8.21369e-05 9.95691 0C4.98902 0 0.956909 4.02578 0.956909 9C0.956909 13.9679 4.98269 18 9.95691 18Z" fill={defaultFill}/>
                    </g>
                    <defs>
                        <clipPath id="clip0_555_638">
                            <rect width={params.width} height={params.height} fill={defaultFill}/>
                        </clipPath>
                    </defs>
                </svg>
            )
        case generalSvgNames.lightTheme:
            return (
                <svg style={{ ...styles }} onClick={onClick} className={className} width={params.width} height={params.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.14377 15.6858L8.68167 15.8768L9.14377 15.6858ZM8.91839 15.2337L8.52328 15.5401L8.91839 15.2337ZM15.0816 15.2337L15.4767 15.5401L15.0816 15.2337ZM17.5 10C17.5 11.8007 16.6352 13.3992 15.2962 14.4033L15.8961 15.2034C17.4761 14.0185 18.5 12.1288 18.5 10H17.5ZM12 4.5C15.0376 4.5 17.5 6.96243 17.5 10H18.5C18.5 6.41015 15.5899 3.5 12 3.5V4.5ZM6.5 10C6.5 6.96243 8.96243 4.5 12 4.5V3.5C8.41015 3.5 5.5 6.41015 5.5 10H6.5ZM8.70383 14.4033C7.3648 13.3992 6.5 11.8007 6.5 10H5.5C5.5 12.1288 6.52387 14.0185 8.1039 15.2034L8.70383 14.4033ZM10.4974 19.7535C10.4668 18.2874 10.1631 16.8435 9.60587 15.4949L8.68167 15.8768C9.1917 17.1111 9.4696 18.4325 9.49764 19.7744L10.4974 19.7535ZM13.5652 19.6584C12.5799 20.151 11.4201 20.151 10.4348 19.6584L9.98754 20.5528C11.2544 21.1862 12.7456 21.1862 14.0125 20.5528L13.5652 19.6584ZM14.3941 15.4949C13.8369 16.8435 13.5332 18.2874 13.5026 19.7535L14.5024 19.7744C14.5304 18.4325 14.8083 17.1111 15.3183 15.8768L14.3941 15.4949ZM14.0125 20.5528C14.3131 20.4024 14.4956 20.0987 14.5024 19.7744L13.5026 19.7535C13.5033 19.7185 13.5234 19.6793 13.5652 19.6584L14.0125 20.5528ZM9.49764 19.7744C9.50442 20.0987 9.68686 20.4024 9.98754 20.5528L10.4348 19.6584C10.4766 19.6793 10.4967 19.7185 10.4974 19.7535L9.49764 19.7744ZM8.1039 15.2034C8.42245 15.4422 8.49305 15.5011 8.52328 15.5401L9.31351 14.9273C9.17866 14.7534 8.96127 14.5964 8.70383 14.4033L8.1039 15.2034ZM9.60587 15.4949C9.51909 15.2849 9.44612 15.0983 9.31351 14.9273L8.52328 15.5401C8.55574 15.582 8.57799 15.6259 8.68167 15.8768L9.60587 15.4949ZM15.2962 14.4033C15.0387 14.5964 14.8213 14.7534 14.6865 14.9273L15.4767 15.5401C15.5069 15.5011 15.5775 15.4422 15.8961 15.2034L15.2962 14.4033ZM15.3183 15.8768C15.422 15.6259 15.4443 15.582 15.4767 15.5401L14.6865 14.9273C14.5539 15.0983 14.4809 15.2849 14.3941 15.4949L15.3183 15.8768Z"
                        fill={defaultFill} />
                    <path d="M14.5 16.5V16.5C12.8951 17.1419 11.1049 17.1419 9.5 16.5V16.5" stroke={defaultStroke} />
                </svg>
            )
        case generalSvgNames.notification:
            return (
                <svg style={{ ...styles }} onClick={onClick} className={className} width={params.width} height={params.height} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_555_640)">
                        <path
                            d="M19.29 17.29L18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.62999 5.36 5.99999 7.92 5.99999 11V16L4.70999 17.29C4.07999 17.92 4.51999 19 5.40999 19H18.58C19.48 19 19.92 17.92 19.29 17.29ZM16 17H7.99999V11C7.99999 8.52 9.50999 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17ZM12 22C13.1 22 14 21.1 14 20H9.99999C9.99999 21.1 10.89 22 12 22Z"
                            fill={defaultFill} />
                    </g>
                    <defs>
                        <clipPath id="clip0_555_640">
                            <rect width={params.width} height={params.height} fill={defaultFill} />
                        </clipPath>
                    </defs>
                </svg>
            )
        default: return (<svg></svg>)
    }
}