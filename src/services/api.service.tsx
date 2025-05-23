import type {IMovie} from "../models/IMovie.ts";
import axios from "axios";
import type {IGenre} from "../models/IGenre.ts";

const apiKey = import.meta.env.VITE_TMDB_API_KEY

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {'Content-Type': 'application/json'}
})

const movieService = {

    getAllMovies: async (page: string, genreId?: string): Promise<IMovie[]> => {
        const url = genreId
            ? `/discover/movie?page=${page}&with_genres=${genreId}&api_key=${apiKey}`
            : `/discover/movie?page=${page}&api_key=${apiKey}`;

        const { data: { results } } = await axiosInstance.get(url);
        return results;
    },
    getMovieById: async (id:number):Promise<IMovie> => {
      return await axiosInstance.get(`/movie/${id}?api_key=${apiKey}`)
    },
    getAllGenres: async (): Promise<IGenre[]> => {
        const { data: {genres} } = await axiosInstance.get(`/genre/movie/list?api_key=${apiKey}`);
        return genres;
    },
    getMoviesByGenre: async (genreId: number): Promise<IMovie[]> => {
        const { data: {results} } = await axiosInstance.get(`/discover/movie?with_genres=${genreId}&api_key=${apiKey}`);
        return results;
    },
    searchMovieByQuery: async (query: string, page: string) => {
      const {data: {results}} =  await axiosInstance.get(`/search/movie?query=${query}&page=${page}&api_key=${apiKey}`)
        return results
    }
}
export {
    movieService
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
