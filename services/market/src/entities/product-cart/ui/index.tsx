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
    price: string
}

export const ProductCart: React.FC<ProductCartProps> = ({ title, author, avatar, preview, price }) => {
    return (
        <figure style={{ backgroundColor: Colours.block_color }} className="product-cart">
            <div style={{ backgroundColor: Colours.background_color }} className="product-cart__img-block">
                <img src={ preview } alt="" className="product-cart__img" />
                <FavoriteButton className='favoriteButton'  type={FavoriteButtonTypes.productCart} />
            </div>
            <div className="product-cart__info">
                <section className="product-cart__section">
                    <Title value={ title } size={ TitleSizes.small } />
                    <p className="product-cart__sub-title">By { author }</p>
                </section>
                <div style={{ backgroundColor: Colours.background_color }} className="product-cart__mini-avatar-block">
                    <img src={ avatar } alt="Mini Avatar" className="product-cart__mini-avatar" />
                </div>
            </div>
            <div className="product-cart__price">
                <p style={{ color: Colours.text_color }} className="product-cart__price-text">Current Bid: { price } RUB</p>
                <Button value='Place Bid' type={ButtonTypes.active} size={ButtonSizes.small}  />
            </div>
        </figure>
    )
}