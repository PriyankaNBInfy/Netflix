export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8cu1CSWR5Olmpms_4WnF6FIiItNMjQP4BA&s";

export const API_OPTIONS = {
  accept: "application/json",
  Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
};

export const CDN_URL = "https://image.tmdb.org/t/p/w400/";

export const movieTypes = {
  nowPlaying: "now_playing",
  popular: "popular",
  topRated: "top_rated",
  upcoming: "upcoming",
};

export const LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "kannada", name: "Kannada" },
  { identifier: "fr", name: "French" },
];
