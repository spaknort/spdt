import React from 'react'
import './index.sass'
import { Colours } from '../../../..'

export const Avatar: React.FC = () => {
    return (
        <div style={{ backgroundColor: Colours.background_color }} className="avatar">
            <img src="https://lh3.google.com/u/0/d/1DzeUW1m93CdMWIdceCRkgiTE23uo1Lx6" alt="Avatar" className="avatar__img" />
        </div>
    )
}