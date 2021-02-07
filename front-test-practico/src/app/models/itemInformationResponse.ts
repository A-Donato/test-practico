import { Author, SearchItem } from "./searchResponse";

export interface ItemInformationResponse {
    author: Author
    item: ItemInformation
}

export interface ItemInformation extends SearchItem {
    sold_quantity: number,
    description: string
}