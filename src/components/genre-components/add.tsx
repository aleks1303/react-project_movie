
// export const movieService = {
//     getAllMovie: async (page: string): Promise<IMovie[]> => {
//         const { data } = await axiosInstance.get(`/discover/movie?page=${page}&api_key=${apiKey}`);
//         return data.results;
//     },
//     getMovieById: async (id: number): Promise<IMovie> => {
//         const { data } = await axiosInstance.get(`/movie/${id}?api_key=${apiKey}`);
//         return data;
//     },
//     getAllGenres: async (): Promise<IGenre[]> => {
//         const { data } = await axiosInstance.get(`/genre/movie/list?api_key=${apiKey}`);
//         return data.genres;
//     },
//     getMoviesByGenre: async (genreId: number): Promise<IMovie[]> => {
//         const { data } = await axiosInstance.get(`/discover/movie?with_genres=${genreId}&api_key=${apiKey}`);
//         return data.results;
//     },
// };
//
// // redux/slices/genreSlice.ts
// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import { movieService } from "../../../services/api.service";
// import { IGenre } from "../../../models/IGenre";
//
// interface GenreState {
//     genres: IGenre[];
//     loading: boolean;
//     error: string | null;
// }
//
// const initialState: GenreState = {
//     genres: [],
//     loading: false,
//     error: null,
// };
//
// export const loadGenres = createAsyncThunk("genre/loadGenres", async (_, thunkAPI) => {
//     try {
//         return await movieService.getAllGenres();
//     } catch (e) {
//         return thunkAPI.rejectWithValue("Помилка при завантаженні жанрів");
//     }
// });
//
// const genreSlice = createSlice({
//     name: "genre",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(loadGenres.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(loadGenres.fulfilled, (state, action: PayloadAction<IGenre[]>) => {
//                 state.loading = false;
//                 state.genres = action.payload;
//             })
//             .addCase(loadGenres.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             });
//     },
// });
//
// export default genreSlice.reducer;
// export const genreActions = { loadGenres };
//
// // redux/slices/movieSlice.ts
// export const loadMoviesByGenre = createAsyncThunk("movie/loadByGenre", async (genreId: number, thunkAPI) => {
//     try {
//         return await movieService.getMoviesByGenre(genreId);
//     } catch (e) {
//         return thunkAPI.rejectWithValue("Не вдалося завантажити фільми за жанром");
//     }
// });
//
// // components/GenreList.tsx
// import { useEffect } from "react";
// import { useAppDispatch } from "../redux/hooks/useAppDispatch";
// import { useAppSelector } from "../redux/hooks/useAppSelector";
// import { genreActions } from "../redux/slices/genreSlice";
// import { movieSliceActions } from "../redux/slices/movieSlice";
//
// const GenreList = () => {
//     const dispatch = useAppDispatch();
//     const { genres, loading, error } = useAppSelector((state) => state.genre);
//
//     useEffect(() => {
//         dispatch(genreActions.loadGenres());
//     }, [dispatch]);
//
//     if (loading) return <p>Завантаження жанрів...</p>;
//     if (error) return <p>{error}</p>;
//
//     return (
//         <div>
//             {genres.map((genre) => (
//                 <button key={genre.id} onClick={() => dispatch(movieSliceActions.loadMoviesByGenre(genre.id))}>
//                     {genre.name}
//                 </button>
//             ))}
//         </div>
//     );
// };
//
// export default GenreList;
