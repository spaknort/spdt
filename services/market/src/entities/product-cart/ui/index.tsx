import { Button, ButtonSizes, ButtonTypes, Title, TitleSizes } from '@packages/shared'
import React from 'react'
import { Colours } from '@packages/shared'
import './index.sass'
import FavoriteButton from '@/shared/ui/favorites-button'
import { FavoriteButtonTypes } from '@/shared/lib/enums/FavoriteButtonTypes'

interface ProductCartProps {
    title: string,
    author: string,
    avatar: string,
    preview: string,
    price: string,
    onClick: () => void
}

export const ProductCart: React.FC<ProductCartProps> = ({ title, author, avatar, preview, price, onClick }) => {
    return (
        <figure style={{ backgroundColor: Colours.block_color }} className="product-cart">
            <div style={{ backgroundColor: Colours.background_color }} className="product-cart__img-block">
                <img onClick={onClick} src={ preview } alt="" draggable={false} className="product-cart__img" />
                <FavoriteButton className='favoriteButton'  type={FavoriteButtonTypes.productCart} />
            </div>
            <div className="product-cart__info">
                <section className="product-cart__section">
                    <Title onClick={onClick} style={{ cursor: 'pointer' }} value={ title } size={ TitleSizes.small } />
                    <p className="product-cart__sub-title">By { author }</p>
                </section>
                <div style={{ backgroundColor: Colours.background_color }} className="product-cart__mini-avatar-block">
                    <img src={ avatar } alt="Mini Avatar" draggable={false} className="product-cart__mini-avatar" />
                </div>
            </div>
            <div className="product-cart__price">
                <p style={{ color: Colours.text_color }} className="product-cart__price-text">Current Bid: { price } RUB</p>
                <Button onClick={onClick} value='Place Bid' type={ButtonTypes.active} size={ButtonSizes.small}  />
            </div>
        </figure>
    )
}