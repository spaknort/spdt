import { ProductsSectionTypes } from "@/shared/lib/enums/ProductsSectionTypes"
import api from "@packages/shared/src/config/axiosConfig"

export const getProductByType = (type: ProductsSectionTypes) => {
    api.post(`products/type/${type}`)
}