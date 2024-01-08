import React, { FC } from "react"
import './index.sass'
import { Aside, Header } from "@packages/shared"
import { svgNames } from "@/shared/lib/enums/svgNames"
import { SvgSelector } from './svgSelector'
import { Style } from "@packages/shared"
import { ProductsSection } from "@/widgets/products-section"

export const Products: FC = () => {
    return (
        <div className="products">
            <Aside items={[
                { svg: <SvgSelector svgName={svgNames.market} />, title: 'NFTs Marketplace' },
                { svg: <SvgSelector svgName={svgNames.profile} />, title: 'Profile' },
                { svg: <SvgSelector svgName={svgNames.signIn} />, title: 'Sign In' },
            ]} />
            <div className="contents">
                <Header title="NFT Marketplace" subTitle="Pages / NFT Marketplace" />
                <main className="main">
                    <ProductsSection title="Trending NFTs" numberOfDisplayedProducts={4} />
                </main>
            </div>
        </div>
    )
}