import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Start } from '@/pages/start'
// @ts-ignore
import adminApp from 'admin/App'

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Start />} />
            </Routes>
        </BrowserRouter>
    )
}