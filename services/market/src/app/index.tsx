import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Start } from '@/pages/start'
import { Index } from '@/pages/index'

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path='/index' element={<Index />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App