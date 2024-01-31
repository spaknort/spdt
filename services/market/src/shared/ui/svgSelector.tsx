import { svgNames } from '@/shared/lib/enums/svgNames'
import React, { CSSProperties } from 'react'

interface svgSelectorProps {
    svgName: svgNames,
    params?: {
        width: number,
        height: number,
        fill: string,
        stroke?: string,
        styles?: CSSProperties
    }
}
export const SvgSelector = ({ svgName, params = {width: 24, height: 24, fill: '#fafafa'} }: svgSelectorProps) => {
    switch (svgName) {
        case svgNames.market:
            return (
                <svg width={params.width} height={params.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_101_12767)">
                        <path d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill={params.fill}/>
                    </g>
                    <defs>
                        <clipPath id="clip0_101_12767">
                            <rect width={params.width} height={params.height} fill={params.fill}/>
                        </clipPath>
                    </defs>
                </svg>
            )
        case svgNames.profile:
            return (
                <svg width={params.width} height={params.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_101_12755)">
                        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z" fill={params.fill}/>
                    </g>
                    <defs>
                        <clipPath id="clip0_101_12755">
                            <rect width={params.width} height={params.height} fill={params.fill}/>
                        </clipPath>
                    </defs>
                </svg>
            )
        case svgNames.signIn:
            return (
                <svg width={params.width} height={params.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_101_12751)">
                        <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM9 8V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9Z" fill={params.fill}/>
                    </g>
                    <defs>
                        <clipPath id="clip0_101_12751">
                            <rect width={params.width} height={params.height} fill={params.fill}/>
                        </clipPath>
                    </defs>
                </svg>
            )
        case svgNames.warrning:
            return (
                <svg width={params.width} height={params.height} style={params.styles} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 24.5C15.3789 24.5 16.7443 24.2284 18.0182 23.7007C19.2921 23.1731 20.4496 22.3996 21.4246 21.4246C22.3996 20.4496 23.1731 19.2921 23.7007 18.0182C24.2284 16.7443 24.5 15.3789 24.5 14C24.5 12.6211 24.2284 11.2557 23.7007 9.98182C23.1731 8.70791 22.3996 7.55039 21.4246 6.57538C20.4496 5.60036 19.2921 4.82694 18.0182 4.29926C16.7443 3.77159 15.3789 3.5 14 3.5C11.2152 3.5 8.54451 4.60625 6.57538 6.57538C4.60625 8.54451 3.5 11.2152 3.5 14C3.5 16.7848 4.60625 19.4555 6.57538 21.4246C8.54451 23.3938 11.2152 24.5 14 24.5ZM12.5417 18.0833V21H15.4583V18.0833H12.5417ZM12.5417 7V15.1667H15.4583V7H12.5417Z" fill={params.fill} />
                </svg>
            )
        case svgNames.dropDownArrow:
            return (
                <svg width={params.width} height={params.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke={params.stroke} />
                </svg>
            )
        default:
            return (<svg></svg>)
    }
}