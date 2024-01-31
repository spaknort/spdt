import React, { FC } from "react"
import './index.sass'
import { Aside, Header } from "@packages/shared"
import { svgNames } from "@/shared/lib/enums/svgNames"
import { SvgSelector } from '@/shared/ui/svgSelector'
import { Style } from "@packages/shared"
import { ProductsSection } from "@/widgets/products-section"
import { ProductsSectionTypes } from "@/shared/lib/enums/ProductsSectionTypes"

export const Products: FC = () => {
    return (
        <div className="products">
            <Aside items={[
                { id: 1, svg: <SvgSelector svgName={svgNames.market} />, title: 'NFTs Marketplace' },
                { id: 2, svg: <SvgSelector svgName={svgNames.profile} />, title: 'Profile' },
                { id: 3, svg: <SvgSelector svgName={svgNames.signIn} />, title: 'Sign In' },
            ]} />
            <div className="contents">
                <Header title="NFT Marketplace" subTitle="Pages / NFT Marketplace" />
                <main className="main">
                    <ProductsSection title="Trending NFTs" numberOfDisplayedProducts={4} type={ProductsSectionTypes.trending} />
                    <ProductsSection title="Recently Added" numberOfDisplayedProducts={4} type={ProductsSectionTypes.recently} />
                </main>
            </div>
        </div>
    )
}