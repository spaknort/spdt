import { Title, TitleSizes } from '@packages/shared'
import React from 'react'
import { Colours } from '@packages/shared'
import './index.sass'

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
                <input type="button" style={{ backgroundColor: Colours.active_color, color: Colours.text_color }} className='product-cart__btn' value="Place Bid" />
            </div>
        </figure>
    )
}