import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LocalRoutes } from '@/shared/config/config'
import { Products } from '@/pages/products'
import { Product } from '@/pages/product'
import { Profile } from '@/pages/profile'
import { Registration } from '@/pages/registration'
import { SignIn } from '@/pages/sign-in'

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={LocalRoutes.start} element={<Products />} />
                <Route path={LocalRoutes.product} element={<Product />} />
                <Route path={LocalRoutes.profile} element={<Profile />} />
                <Route path={LocalRoutes.registration} element={<Registration />} />
                <Route path={LocalRoutes.signIn} element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )
}