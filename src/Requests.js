const API_key = 'd706353468d2a7ca4ba5ae02f3a60d7f'

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=3`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=2`,
  requestNetflixOriginal: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_networks=125&page=2`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=28&page=3`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_key}&language=en-US&page=1`,
  requestAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=16`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=35`,
  requestCrime: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=80`,
  requestDocumentry: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=99`,
  requestThriller: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=53`,
  requestMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=9648`,  
  requestyImages: `https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=${API_key}&language=en-US`
};

  export default requests