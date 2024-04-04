import React, { FC } from "react"
import './index.sass'
import { Aside, Header } from "@packages/shared"
import { ProductsSection } from "@/widgets/products-section"
import { ProductsSectionTypes } from "@/shared/lib/enums/ProductsSectionTypes"
import NavigationPanel from "@/shared/config/UIConfig"

export const Products: FC = () => {
    return (
        <div className="products">
            <Aside items={NavigationPanel} />
            <div className="contents">
                <Header title="NFT Marketplace" subTitle="Pages / NFT Marketplace" />
                <main className="main">
                    <ProductsSection title="Trending NFTs" numberOfDisplayedProducts={4} scrollSpeed={3} type={ProductsSectionTypes.trending} />
                    <ProductsSection title="Recently Added" numberOfDisplayedProducts={4} scrollSpeed={1} type={ProductsSectionTypes.recently} />
                </main>
            </div>
        </div>
    )
}