import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LocalRoutes } from '@/shared/config/config'
import { Products } from '@/pages/products'
import { Product } from '@/pages/product'
import { Profile } from '@/pages/profile'
import { SignIn } from '@/pages/sign-in'
import { SignUp } from '@/pages/sign-up'

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={LocalRoutes.start} element={<Products />} />
                <Route path={LocalRoutes.product} element={<Product />} />
                <Route path={LocalRoutes.profile} element={<Profile />} />
                <Route path={LocalRoutes.signIn} element={<SignIn />} />
                <Route path={LocalRoutes.signUp} element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}