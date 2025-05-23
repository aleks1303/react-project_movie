import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovie} from "../../../models/IMovie.ts";
import {movieService} from "../../../services/api.service.tsx";

type movieSliceType = {
    movie: IMovie[],
    loading:boolean,
    error: string | null
}

const initMovieSlice: movieSliceType = {
    movie: [],
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


export const movieSlice = createSlice({
    name: "movieSlice",
    initialState: initMovieSlice,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadMovie.pending, (state) => {

            state.loading = true
            state.error = null
        })
        .addCase(loadMovie.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
            state.loading = false
            state.movie = action.payload

        })
        .addCase(loadMovie.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || "Unknown error"
        })
});


export const movieSliceActions = {
    ...movieSlice.actions, loadMovie
}
