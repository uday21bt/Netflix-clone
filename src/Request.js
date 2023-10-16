const key = 'ccffe410f1d6f178e81465d38f36dd40'

const Requests = {
    requestPopular:  `https://api.themoviedb.org/3/movie/popular?api_key=ccffe410f1d6f178e81465d38f36dd40&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=ccffe410f1d6f178e81465d38f36dd40&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=ccffe410f1d6f178e81465d38f36dd40&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=ccffe410f1d6f178e81465d38f36dd40&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=ccffe410f1d6f178e81465d38f36dd40&language=en-US&page=1`,
  };


  export default Requests



//   https://api.themoviedb.org/3/movie/top_rated?api_key=ccffe410f1d6f178e81465d38f36dd40
// https://api.themoviedb.org/3/movie/upcoming?api_key=ccffe410f1d6f178e81465d38f36dd40