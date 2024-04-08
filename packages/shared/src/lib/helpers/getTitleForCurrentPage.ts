import { LocalRoutes } from "../../config/globalConfig"

export const getTitleForCurrentPage = (): string => {
    const url = new URL(window.location.href)
    let title = ''

    if (url.pathname == LocalRoutes.product) title = 'Product'
    if (url.pathname == LocalRoutes.start) title = 'NFT Marketplace'
    if (url.pathname == LocalRoutes.profile) title = 'Profile'

    document.title = title
    return title
}