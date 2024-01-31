import React from 'react'
import './index.sass'
import { Title, TitleSizes } from '@packages/shared'
import { ProductCart } from '@/entities/product-cart'
import { ProductsSectionTypes } from '@/shared/lib/enums/ProductsSectionTypes'

interface ProductsSectionProps {
    title: string,
    numberOfDisplayedProducts: number,
    type: ProductsSectionTypes
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ title, numberOfDisplayedProducts, type }) => {
    const trendingProducts = [
        {
            id: 1,
            title: 'Abstract Colors',
            author: 'Esthera Jackson',
            avatar: 'https://lh3.google.com/u/0/d/1DzeUW1m93CdMWIdceCRkgiTE23uo1Lx6',
            preview: 'https://lh3.google.com/u/0/d/1OaO6s-reYvsNs-xkZsZ5-Oye2KSHmE7p',
            price: '0.91'
        },
        {
            id: 2,
            title: 'ETH AI Brain',
            author: 'Nick Wilson',
            avatar: 'https://lh3.google.com/u/0/d/1DzeUW1m93CdMWIdceCRkgiTE23uo1Lx6',
            preview: 'https://lh3.google.com/u/0/d/1OaO6s-reYvsNs-xkZsZ5-Oye2KSHmE7p',
            price: '2.82'
        },
        {
            id: 3,
            title: 'Mesh Gradients',
            author: 'By Will Smith',
            avatar: 'https://lh3.google.com/u/0/d/1DzeUW1m93CdMWIdceCRkgiTE23uo1Lx6',
            preview: 'https://lh3.google.com/u/0/d/1OaO6s-reYvsNs-xkZsZ5-Oye2KSHmE7p',
            price: '0.56'
        },
        {
            id: 4,
            title: 'Mesh Gradients',
            author: 'By Will Smith',
            avatar: 'https://lh3.google.com/u/0/d/1wpKZ_YYa97Atyu4D7lmQulw9QYjCoik-',
            preview: 'https://lh3.google.com/u/0/d/1OaO6s-reYvsNs-xkZsZ5-Oye2KSHmE7p',
            price: '0.56'
        },
        {
            id: 5,
            title: 'Mesh Gradients',
            author: 'By Will Smith',
            avatar: 'https://lh3.google.com/u/0/d/1wpKZ_YYa97Atyu4D7lmQulw9QYjCoik-',
            preview: 'https://lh3.google.com/u/0/d/1OaO6s-reYvsNs-xkZsZ5-Oye2KSHmE7p',
            price: '0.56'
        },
        {
            id: 6,
            title: 'Abstract Colors',
            author: 'Esthera Jackson',
            avatar: 'https://lh3.google.com/u/0/d/1wpKZ_YYa97Atyu4D7lmQulw9QYjCoik-',
            preview: 'https://lh3.google.com/u/0/d/1OaO6s-reYvsNs-xkZsZ5-Oye2KSHmE7p',
            price: '0.91'
        },
        {
            id: 7,
            title: 'ETH AI Brain',
            author: 'Nick Wilson',
            avatar: 'https://lh3.google.com/u/0/d/1wpKZ_YYa97Atyu4D7lmQulw9QYjCoik-',
            preview: 'https://lh3.google.com/u/0/d/1OaO6s-reYvsNs-xkZsZ5-Oye2KSHmE7p',
            price: '2.82'
        },
        {
            id: 8,
            title: 'Mesh Gradients',
            author: 'By Will Smith',
            avatar: 'https://lh3.google.com/u/0/d/1wpKZ_YYa97Atyu4D7lmQulw9QYjCoik-',
            preview: 'https://lh3.google.com/u/0/d/1OaO6s-reYvsNs-xkZsZ5-Oye2KSHmE7p',
            price: '0.56'
        },
    ]
    const recentlyProducts = [
        {
            id: 1,
            title: 'Abstract Colors',
            author: 'Esthera Jackson',
            avatar: 'https://lh3.google.com/u/0/d/1DzeUW1m93CdMWIdceCRkgiTE23uo1Lx6',
            preview: 'https://lh3.google.com/u/0/d/1eVJ48s49_JX38O6MclKBF988XTDLBMy0',
            price: '0.91'
        },
        {
            id: 2,
            title: 'Abstract Colors',
            author: 'Esthera Jackson',
            avatar: 'https://lh3.google.com/u/0/d/1DzeUW1m93CdMWIdceCRkgiTE23uo1Lx6',
            preview: 'https://lh3.google.com/u/0/d/1eVJ48s49_JX38O6MclKBF988XTDLBMy0',
            price: '0.91'
        },
        {
            id: 3,
            title: 'Abstract Colors',
            author: 'Esthera Jackson',
            avatar: 'https://lh3.google.com/u/0/d/1DzeUW1m93CdMWIdceCRkgiTE23uo1Lx6',
            preview: 'https://lh3.google.com/u/0/d/1eVJ48s49_JX38O6MclKBF988XTDLBMy0',
            price: '0.91'
        },
        {
            id: 4,
            title: 'Abstract Colors',
            author: 'Esthera Jackson',
            avatar: 'https://lh3.google.com/u/0/d/1DzeUW1m93CdMWIdceCRkgiTE23uo1Lx6',
            preview: 'https://lh3.google.com/u/0/d/1eVJ48s49_JX38O6MclKBF988XTDLBMy0',
            price: '0.91'
        },
        {
            id: 5,
            title: 'Abstract Colors',
            author: 'Esthera Jackson',
            avatar: 'https://lh3.google.com/u/0/d/1DzeUW1m93CdMWIdceCRkgiTE23uo1Lx6',
            preview: 'https://lh3.google.com/u/0/d/1eVJ48s49_JX38O6MclKBF988XTDLBMy0',
            price: '0.91'
        }
    ]
    const products = (type == ProductsSectionTypes.recently) ? recentlyProducts: trendingProducts

    return (
        <div className="products-section">
            <div className="products-section__header">
                <Title value={title} size={TitleSizes.medium} />
            </div>
            <div className="products-section__cards">
                {
                    products.map(product => (
                        <ProductCart key={String(Date.now() * product.id)} title={product.title} author={product.author} avatar={product.avatar} preview={product.preview} price={product.price} />
                    ))
                }
            </div>
        </div>
    )
}