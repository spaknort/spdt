import { Button, ButtonSizes, ButtonTypes, LightThemeColours, Title, TitleSizes, useTypedSelector } from '@packages/shared'
import React from 'react'
import { Colours } from '@packages/shared'
import './index.sass'
import FavoriteButton from '@/shared/ui/favorites-button'
import { FavoriteButtonTypes } from '@/shared/lib/enums/FavoriteButtonTypes'
import { ThemeTypes } from '@packages/shared/src/lib/enum/themeTypes'

interface ProductCartProps {
    title: string,
    author: string,
    avatar: string,
    preview: string,
    price: string,
    onClick: () => void
}

export const ProductCart: React.FC<ProductCartProps> = ({ title, author, avatar, preview, price, onClick }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const productCartThemeStyle = (theme == ThemeTypes.DARK) ? Colours.block_color: LightThemeColours.block_color
    const avatarThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color
    const priceThemeStyle = (theme == ThemeTypes.DARK) ? Colours.text_color: LightThemeColours.text_color

    return (
        <figure style={{ backgroundColor: productCartThemeStyle }} className="product-cart">
            <div style={{ backgroundColor: Colours.background_color }} className="product-cart__img-block">
                <img onClick={onClick} src={ preview } alt="" draggable={false} className="product-cart__img" />
                <FavoriteButton className='favoriteButton'  type={FavoriteButtonTypes.productCart} />
            </div>
            <div className="product-cart__info">
                <section className="product-cart__section">
                    <Title onClick={onClick} style={{ cursor: 'pointer' }} value={ title } size={ TitleSizes.small } />
                    <p className="product-cart__sub-title">By { author }</p>
                </section>
                <div style={{ backgroundColor: avatarThemeStyle }} className="product-cart__mini-avatar-block">
                    <img src={ avatar } alt="Mini Avatar" draggable={false} className="product-cart__mini-avatar" />
                </div>
            </div>
            <div className="product-cart__price">
                <p style={{ color: priceThemeStyle }} className="product-cart__price-text">Current Bid: { price } RUB</p>
                <Button onClick={onClick} value='Place Bid' type={ButtonTypes.active} size={ButtonSizes.small}  />
            </div>
        </figure>
    )
}