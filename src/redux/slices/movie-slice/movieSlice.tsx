import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {movieService} from "../../../services/api.service.tsx";
import type {IMovies} from "../../../models/IMovies/IMovies.ts";

type movieSliceType = {
    movie: IMovies | null
    movies: IMovies[],
    loading:boolean,
    error: string | null
}

const initMovieSlice: movieSliceType = {
    movie: null,
    movies: [],
    loading:false,
    error: null
}

const loadMovie = createAsyncThunk(
    "movieSlice/loadMovie",
   async ({ page, genreId }: { page: string, genreId?: string }, thunkAPI) => {
     try {
         const movie = await movieService.getAllMovies(page, genreId)
         return (movie)
     }catch (e) {
         return thunkAPI.rejectWithValue(e);
     }
    }
)

const loadMovieDetails = createAsyncThunk(
    "movieSlice/loadMovieDetails",
    async (id: string, thunkAPI) => {
        try {
            const response = await movieService.getMovieById(id);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const movieSlice = createSlice({
    name: "movieSlice",
    initialState: initMovieSlice,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadMovie.pending, (state) => {

            state.loading = true
            state.error = null
        })
        .addCase(loadMovie.fulfilled, (state, action: PayloadAction<IMovies[]>) => {
            state.loading = false
            state.movies = action.payload

        })
        .addCase(loadMovieDetails.fulfilled, (state, action: PayloadAction<IMovies>) => {
            state.loading = false
            state.movie = action.payload

        })
        .addCase(loadMovie.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || "Unknown error"
        })
});


export const movieSliceActions = {
    ...movieSlice.actions, loadMovie, loadMovieDetails
}
