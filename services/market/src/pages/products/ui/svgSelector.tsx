import { svgNames } from '@/shared/lib/enums/svgNames'
import React from 'react'

interface svgSelectorProps {
    svgName: svgNames,
    params?: {
        width: number,
        height: number,
        fill: string,
        stroke?: string
    }
}
export const SvgSelector = ({ svgName, params = {width: 24, height: 24, fill: '#fafafa'} }: svgSelectorProps) => {
    switch (svgName) {
        case svgNames.market:
            return (
                <svg width={params.width} height={params.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_101_12767)">
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
                    <g clip-path="url(#clip0_101_12755)">
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
                    <g clip-path="url(#clip0_101_12751)">
                        <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM9 8V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9Z" fill={params.fill}/>
                    </g>
                    <defs>
                        <clipPath id="clip0_101_12751">
                            <rect width={params.width} height={params.height} fill={params.fill}/>
                        </clipPath>
                    </defs>
                </svg>
            )
        default:
            return (<svg></svg>)
    }
}