const API_key = 'd706353468d2a7ca4ba5ae02f3a60d7f'

const requests = {
  requestNetflixOriginal: `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=8`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=3`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_key}&language=en-US&page=1`,
};

export default requests