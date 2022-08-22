export type MangaSecondarySlide = {
    entry: {
        mal_id: number,
        url: string,
        images: {
            jpg: {
                image_url: string
            }
        }
        title: string;
    }
    url: string;
    votes: number
}