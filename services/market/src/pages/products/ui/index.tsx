import React, { FC, useEffect } from "react"
import './index.sass'
import { Aside, Colours, getTitleForCurrentPage, Header, helperForTheme, LightThemeColours, useTypedSelector } from "@packages/shared"
import { ProductsSection } from "@/widgets/products-section"
import { ProductsSectionTypes } from "@/shared/lib/enums/ProductsSectionTypes"
import NavigationPanel from "@/shared/config/UIConfig"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"

export const Products: FC = () => {
    const titleForCurrentPage = getTitleForCurrentPage()
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const mainThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color
    const backgroundThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color

    useEffect(() => helperForTheme(theme, backgroundThemeStyle), [backgroundThemeStyle])
    
    return (
        <div className="products">
            <Aside items={NavigationPanel} />
            <div className="contents">
                <Header title={titleForCurrentPage} subTitle={`Pages / ${titleForCurrentPage}`} />
                <main style={{ background: mainThemeStyle }} className="main">
                    <ProductsSection title="Trending NFTs" numberOfDisplayedProducts={4} scrollSpeed={3} type={ProductsSectionTypes.TRENDING} />
                    <ProductsSection title="Recently Added" numberOfDisplayedProducts={4} scrollSpeed={1} type={ProductsSectionTypes.RECENTLY} />
                </main>
            </div>
        </div>
    )
}