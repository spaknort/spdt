import React from 'react'
import './index.sass'
import { Title, TitleSizes } from '@packages/shared'
import { ProductCart } from '@/entities/product-cart'

interface ProductsSectionProps {
    title: string,
    numberOfDisplayedProducts: number
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ numberOfDisplayedProducts }) => {
    const products = [
        {
            title: 'Abstract Colors',
            author: 'Esthera Jackson',
            avatar: 'https://drive.google.com/uc?export=view&id=1DzeUW1m93CdMWIdceCRkgiTE23uo1Lx6',
            preview: 'https://drive.google.com/uc?export=view&id=1OaO6s-reYvsNs-xkZsZ5-Oye2KSHmE7p',
            price: '0.91'
        },
        {
            title: 'ETH AI Brain',
            author: 'Nick Wilson',
            avatar: 'https://drive.google.com/uc?export=view&id=1DzeUW1m93CdMWIdceCRkgiTE23uo1Lx6',
            preview: 'https://drive.google.com/uc?export=view&id=1OaO6s-reYvsNs-xkZsZ5-Oye2KSHmE7p',
            price: '2.82'
        },
        {
            title: 'Mesh Gradients',
            author: 'By Will Smith',
            avatar: 'https://drive.google.com/uc?export=view&id=1DzeUW1m93CdMWIdceCRkgiTE23uo1Lx6',
            preview: 'https://drive.google.com/uc?export=view&id=1OaO6s-reYvsNs-xkZsZ5-Oye2KSHmE7p',
            price: '0.56'
        }
    ]
    return (
        <div className="products-section">
            <div className="products-section__header">
                <Title value='Trending NFTs' size={TitleSizes.medium} />
            </div>
            <div className="products-section__cards">
                {
                    products.map(product => (
                        <ProductCart title={product.title} author={product.author} avatar={product.avatar} preview={product.preview} price={product.price} />
                    ))
                }
            </div>
        </div>
    )
}