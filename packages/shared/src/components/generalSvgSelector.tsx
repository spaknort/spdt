import React, { CSSProperties } from 'react'
import { generalSvgNames } from '../lib/enum/generalSvgNames'

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
    switch (svgName) {
        case generalSvgNames.eye:
            return (
                <svg style={{ ...styles }} onClick={onClick} className={className} width={params.width} height={params.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_561_787)">
                        <path d="M9.99992 5.41667C13.1583 5.41667 15.9749 7.19167 17.3499 10C15.9749 12.8083 13.1666 14.5833 9.99992 14.5833C6.83325 14.5833 4.02492 12.8083 2.64992 10C4.02492 7.19167 6.84158 5.41667 9.99992 5.41667ZM9.99992 3.75C5.83325 3.75 2.27492 6.34167 0.833252 10C2.27492 13.6583 5.83325 16.25 9.99992 16.25C14.1666 16.25 17.7249 13.6583 19.1666 10C17.7249 6.34167 14.1666 3.75 9.99992 3.75ZM9.99992 7.91667C11.1499 7.91667 12.0833 8.85 12.0833 10C12.0833 11.15 11.1499 12.0833 9.99992 12.0833C8.84992 12.0833 7.91658 11.15 7.91658 10C7.91658 8.85 8.84992 7.91667 9.99992 7.91667ZM9.99992 6.25C7.93325 6.25 6.24992 7.93333 6.24992 10C6.24992 12.0667 7.93325 13.75 9.99992 13.75C12.0666 13.75 13.7499 12.0667 13.7499 10C13.7499 7.93333 12.0666 6.25 9.99992 6.25Z" fill="#A3AED0"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_561_787">
                            <rect width={params.width} height={params.height} fill={params.fill}/>
                        </clipPath>
                    </defs>
                </svg>
            )
        case generalSvgNames.crossedEye:
            return (
                <svg onClick={onClick} className={className} width={params.width} height={params.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 6L16 14" stroke={params.stroke}/>
                        <g clipPath="url(#clip0_561_784)">
                    <path d="M9.99992 5.41667C13.1583 5.41667 15.9749 7.19167 17.3499 10C15.9749 12.8083 13.1666 14.5833 9.99992 14.5833C6.83325 14.5833 4.02492 12.8083 2.64992 10C4.02492 7.19167 6.84158 5.41667 9.99992 5.41667ZM9.99992 3.75C5.83325 3.75 2.27492 6.34167 0.833252 10C2.27492 13.6583 5.83325 16.25 9.99992 16.25C14.1666 16.25 17.7249 13.6583 19.1666 10C17.7249 6.34167 14.1666 3.75 9.99992 3.75ZM9.99992 7.91667C11.1499 7.91667 12.0833 8.85 12.0833 10C12.0833 11.15 11.1499 12.0833 9.99992 12.0833C8.84992 12.0833 7.91658 11.15 7.91658 10C7.91658 8.85 8.84992 7.91667 9.99992 7.91667ZM9.99992 6.25C7.93325 6.25 6.24992 7.93333 6.24992 10C6.24992 12.0667 7.93325 13.75 9.99992 13.75C12.0666 13.75 13.7499 12.0667 13.7499 10C13.7499 7.93333 12.0666 6.25 9.99992 6.25Z" fill="#A3AED0"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_561_784">
                            <rect width={params.width} height={params.height} fill={params.fill}/>
                        </clipPath>
                    </defs>
                </svg>
            )
        default: return (<svg></svg>)
    }
}