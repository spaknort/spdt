import React, { FC } from "react"
import './index.sass'
import { Aside, getTitleForCurrentPage, Header } from "@packages/shared"
import { ProductsSection } from "@/widgets/products-section"
import { ProductsSectionTypes } from "@/shared/lib/enums/ProductsSectionTypes"
import NavigationPanel from "@/shared/config/UIConfig"

export const Products: FC = () => {
    const titleForCurrentPage = getTitleForCurrentPage()

    return (
        <div className="products">
            <Aside items={NavigationPanel} />
            <div className="contents">
                <Header title={titleForCurrentPage} subTitle={`Pages / ${titleForCurrentPage}`} />
                <main className="main">
                    <ProductsSection title="Trending NFTs" numberOfDisplayedProducts={4} scrollSpeed={3} type={ProductsSectionTypes.trending} />
                    <ProductsSection title="Recently Added" numberOfDisplayedProducts={4} scrollSpeed={1} type={ProductsSectionTypes.recently} />
                </main>
            </div>
        </div>
    )
}