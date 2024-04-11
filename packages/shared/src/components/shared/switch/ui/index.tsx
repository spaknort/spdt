import React, { useState } from 'react'
import './index.sass'

interface SwitchProps {
    state: boolean,
    onClick?: () => void
}

export const Switch: React.FC<SwitchProps> = ({ state, onClick }) => {
    return (
        <input onClick={onClick} defaultChecked={state} type="checkbox" className="switch" />
    )
}