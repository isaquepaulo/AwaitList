import { Authors } from "./authors";
import { Demographics } from "./demographics";
import { Genres } from "./genres";
import { Themes } from "./themes";
import { Webp } from "./webp";

type Manga = {
  mal_id: number | string;
  url: string;
  images: {
    jpg: {
      image_url: string;
    }
  }
  webp: Webp[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: ["Berserk: The Prototype"];
  type: string;
  chapters: null;
  volumes: null;
  status: string;
  publishing: boolean;
  published: {
    from: string;
    to: null;
    string: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      },
      to: {
        day: number;
        month: number;
        year: number;
      }
    }
  }
  score: number;
  scored: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: Authors[];
  genres: Genres[];
  themes: Themes[];
  demographics: Demographics[];
};

export default Manga;
