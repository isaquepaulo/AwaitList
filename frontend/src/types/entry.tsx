import { Webp } from "./webp";
import { Images } from "./images";


export type Entry = {
    images: Images[];
    webp: Webp[];
    mal_id: number;
    title: string;
    url: string
}

