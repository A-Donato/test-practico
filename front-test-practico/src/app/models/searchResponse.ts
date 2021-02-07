export interface SearchResponse {
    author: Author;
    categories: string[];
    items: SearchItem[]
}

export interface Author {
    name: string;
    lastname: string;
}

export interface SearchItem {
    id: string;
    title: string,
    price: ItemPrice
    picture: string,
    condition: string,
    free_shipping: boolean,
    location: string
}

export interface ItemPrice {
    currency: string,
    amount: number,
    decimals: number
}