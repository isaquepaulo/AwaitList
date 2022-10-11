export type SpringPage<T> = {
    content: T[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty: boolean;
    pagination: {
        current_page: number,
        has_next_page: boolean,
        items: {
            count: number,
            per_page: number,
            total: number
        },
        last_visible_page: number
    }
};
