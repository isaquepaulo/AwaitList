import {Item} from "./item"
export type Spring<T> = {
    content: T[]
    last_visible_page: number;
    has_next_page: boolean,
    current_page: number,
    item: Item[]

}