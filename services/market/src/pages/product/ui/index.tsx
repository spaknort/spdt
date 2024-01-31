import React, { FC } from "react"
import './index.sass'
import { Aside, Button, ButtonSizes, ButtonTypes, Colours, Header, Title, TitleSizes } from "@packages/shared"
import { SvgSelector } from "@/shared/ui/svgSelector"
import { svgNames } from "@/shared/lib/enums/svgNames"
import { Warrning } from "@/entities/warring"
import { DropDown } from "@/entities/dropdown"

export const Product: FC = () => {
    return (
        <div className="product">
            <Aside items={[
                { id: 1, svg: <SvgSelector svgName={svgNames.market} />, title: 'NFTs Marketplace' },
                { id: 2, svg: <SvgSelector svgName={svgNames.profile} />, title: 'Profile' },
                { id: 3, svg: <SvgSelector svgName={svgNames.signIn} />, title: 'Sign In' },
            ]} />
            <div className="contents">
                <Header title="NFT Marketplace" subTitle="Pages / NFT Marketplace" />
                <main className="main main_product">
                    <div className="main__left">
                        <div style={{ backgroundColor: Colours.block_color }} className="product__img-block">
                            <img className="product__img" src="https://lh3.google.com/u/0/d/1OaO6s-reYvsNs-xkZsZ5-Oye2KSHmE7p" alt="" />
                        </div>
                        <DropDown items={[
                            {
                                svgName: svgNames.market,
                                value: 'Детали',
                                content: [
                                    { key: 'Категория', value: 'Design' },
                                    { key: 'Создатель', value: '7EC' },
                                    { key: 'Владелец', value: 'Will Smith' },
                                    { key: 'Адрес контракта', value: '0x8e6c...4c19' },
                                    { key: 'ID токена', value: '1354800000343' },
                                    { key: 'Роялти', value: '9.9%' },
                                    { key: 'Комиссия платформы', value: '1%' }
                                ]
                            },
                            // {
                            //     svgName: svgNames.profile,
                            //     value: 'Описание',
                            //     content: [
                            //         { key: 'Категория', value: 'Design' },
                            //         { key: 'Создатель', value: '7EC' },
                            //         { key: 'Владелец', value: 'Will Smith' },
                            //         { key: 'Адрес контракта', value: '0x8e6c...4c19' },
                            //         { key: 'ID токена', value: '1354800000343' },
                            //         { key: 'Роялти', value: '9.9%' },
                            //         { key: 'Комиссия платформы', value: '1%' }
                            //     ]
                            // }
                        ]} />
                    </div>
                    <div className="main__right">
                        <div className="product__header">
                            <div className="product__section">
                                <Title style={{ color: Colours.active_color }} value="Esthera Jackson" size={TitleSizes.small} />
                                <Title value="Abstract Colors" size={TitleSizes.large} />
                            </div>
                        </div>
                        <div className="product__price-block">
                            <h6 className="product__price-title">Price</h6>
                            <h4 style={{ color: Colours.text_color }} className="product__price">
                                0.91 RUB 
                                <span className="product__price__span">≈ 12 USD</span>
                            </h4>
                            <p className="product__price-info">0% above the floor price <span style={{ color: Colours.text_color }}>0.15 RUB</span></p>
                        </div>
                        <div className="product__buy">
                            <Button size={ButtonSizes.medium} type={ButtonTypes.active} value="Buy Now" />
                            <Button size={ButtonSizes.medium} type={ButtonTypes.inactive} value="Make Off" />
                        </div>
                        <Warrning
                            text="Напоминание о риске: в настоящее время вы просматриваете неверифицированную коллекцию. Эти NFT не были верифицированы Binance. Вам необходимо самостоятельно изучить информацию о создателе, легитимности или подлинности. Совершайте покупку только в том случае, если вы согласны со связанными рисками."
                            background={Colours.block_color}
                        />
                    </div>
                </main>
            </div>
        </div>
    )
}