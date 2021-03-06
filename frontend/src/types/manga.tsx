import { Authors } from "./authors";
import { Demographics } from "./demographics";
import { Genres } from "./genres";
import { Images } from "./images";
import { Published } from "./published";
import { Themes } from "./themes";
import { Webp } from "./webp";

export type Manga = {
  mal_id: number;
  url: string;
  images: Images[];
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
