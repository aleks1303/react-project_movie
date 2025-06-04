import axios from "axios";
import type {IMovies} from "../models/IMovies/IMovies.ts";
import type {IGenres} from "../models/IMovies/IGenres.ts";


const apiKey = import.meta.env.VITE_TMDB_API_KEY

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {'Content-Type': 'application/json'}
})

const movieService = {

    getAllMovie: async (): Promise<IMovies[]> => {
        const {data: {results}} = await axiosInstance.get(`/discover/movie&api_key=${apiKey}`);
        return results;
    },

    getAllMovies: async (page: string, genreId?: string): Promise<IMovies[]> => {
        const url = genreId
            ? `/discover/movie?page=${page}&with_genres=${genreId}&api_key=${apiKey}`
            : `/discover/movie?page=${page}&api_key=${apiKey}`;

        const {data: {results}} = await axiosInstance.get(url);
        return results;
    },
    getMovieById: async (id: string): Promise<IMovies> => {
        const {data} = await axiosInstance.get(`/movie/${id}?api_key=${apiKey}`)
        return data
    },
    getAllGenres: async (): Promise<IGenres[]> => {
        const {data: {genres}} = await axiosInstance.get(`/genre/movie/list?api_key=${apiKey}`);
        return genres;
    },
    getMoviesByGenre: async (genreId: number): Promise<IMovies[]> => {
        const {data: {results}} = await axiosInstance.get(`/discover/movie?with_genres=${genreId}&api_key=${apiKey}`);
        return results;
    },
    searchMovieByQuery: async (query: string, page: string): Promise<IMovies[]> => {
        const {data: {results}} = await axiosInstance.get(`/search/movie?query=${query}&page=${page}&api_key=${apiKey}`)
        return results
    }
}
export {
    movieService
}
