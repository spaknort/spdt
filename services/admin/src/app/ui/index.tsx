import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Start } from '@/pages/start'

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Start />} />
            </Routes>
        </BrowserRouter>
    )
}

export const RoutesModule: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Start />} />
        </Routes>
    )
}