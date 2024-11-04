let randomU = Math.floor(Math.random() * 100);
export const RANDOM_USER_PHOTO =
  "https://randomuser.me/api/portraits/men/" + randomU + ".jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_KEY,
  },
};

export const API_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const API_URL_TOPRATED =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";
export const API_URL_UPCOMMING =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";
export const API_URL_POPULAR =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const IMAGEURL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

