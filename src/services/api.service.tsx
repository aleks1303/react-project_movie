import type {IMovie} from "../models/IMovie.ts";
import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {'Content-Type': 'application/json'}
})

const movieService = {
    getAllMovie: async ():Promise<IMovie[]> => {
     const {data: {results}} = await axiosInstance.get(`/discover/movie?api_key=${apiKey}`)
        return results
    },
    getMovieById: async (id:number):Promise<IMovie> => {
      return await axiosInstance.get(`/movie/${id}?api_key=${apiKey}`)
    }
}




// const movieService = {
//     getAllMovie: async (): Promise<IMovie[]> => {
//         const { data } = await axiosInstance.get(`/discover/movie`, {
//             params: {
//                 api_key: apiKey
//             }
//         });
//         return data.results;
//     }
// };
//

// const baseUrl = '/discover/movie'
//
// const movieService = {
//     getMovie: async ():Promise<IMovie[]> => {
//      const {results: {results}} = await fetch(`${baseUrl}?api_key=${apiKey}`)
//             .then(res => res.json())
//         return results
//     }
// }

export {
    movieService
}

// const apiKey = process.env.REACT_APP_TMDB_API_KEY;
// const baseURL = 'https://api.themoviedb.org/3';
//
// export const moviesAPI = {
//     getMovies: (page = 1) =>
//         axios.get(`${baseURL}/discover/movie`, {
//             params: { api_key: apiKey, page },
//         }),
//     getGenres: () =>
//         axios.get(`${baseURL}/genre/movie/list`, {
//             params: { api_key: apiKey },
//         }),
//     getMovieById: (id: string) =>
//         axios.get(`${baseURL}/movie/${id}`, {
//             params: { api_key: apiKey },
//         }),
//     searchMovies: (query: string) =>
//         axios.get(`${baseURL}/search/movie`, {
//             params: { api_key: apiKey, query },
//         }),
// };
