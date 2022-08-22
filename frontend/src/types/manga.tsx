import { Authors } from "./authors";
import { Demographics } from "./demographics";
import { Genres } from "./genres";

import { Published } from "./published";
import { Themes } from "./themes";
import { Webp } from "./webp";
import { Mal_id } from "./mal_id";

export type Manga = {
  mal_id: Mal_id;
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
  published: Published[];
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
