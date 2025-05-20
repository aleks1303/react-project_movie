import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovie} from "../../../models/IMovie.ts";
import {movieService} from "../../../services/api.service.tsx";

type movieSliceType = {
    movie: IMovie[],
    landing:boolean,
    error: string | null
}

const initMovieSlice: movieSliceType = {
    movie: [],
    landing:false,
    error: null
}

const loadMovie = createAsyncThunk(
    "movieSlice/loadMovie",
   async (_, thunkAPI) => {
     try {
         const movie = await movieService.getAllMovie()
         return thunkAPI.fulfillWithValue(movie)
     }catch (e) {
         return thunkAPI.rejectWithValue(e)
     }
    }
);


export const movieSlice = createSlice({
    name: "movieSlice",
    initialState: initMovieSlice,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadMovie.pending, (state) => {
            state.landing = true
            state.error = null
        })
        .addCase(loadMovie.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
            state.landing = false
            state.movie = action.payload

        })
        .addCase(loadMovie.rejected, (state, action) => {
            state.landing = false
            state.error = action.error.message || "Unknown error"
        })
});


export const movieSliceActions = {
    ...movieSlice, loadMovie
}


