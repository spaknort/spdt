export interface IProduct {
    id: number,
    title: string,
    file: Blob,
    price: number,
    sale: number,
    favotites_count: number,
    category: number,
    creator_id: number,
    owner_id: number,
    contract_address: string,
    token_id: string,
    royalty: Int16Array,
    commission_platform: number,
    date_time: string
}