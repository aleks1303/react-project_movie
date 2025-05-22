import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IGenre} from "../../../models/IGenre.ts";
import {movieService} from "../../../services/api.service.tsx";

type genreSliceType = {
    genre: IGenre[],
    loading: boolean,
    error: string | null
}

const initGenreSlice: genreSliceType = {
    genre: [],
    loading: false,
    error: null
}

 const loadGenre = createAsyncThunk(
     "genreSlice/loadGenre",
     async (_, thunkAPI) => {
         try {
             const genre = await movieService.getAllGenres()
             return thunkAPI.fulfillWithValue(genre)
         } catch (e) {
             return thunkAPI.rejectWithValue(e)
         }
     }
 );


export const genreSlice = createSlice({
    name: "genreSlice",
    initialState: initGenreSlice,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadGenre.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(loadGenre.fulfilled, (state, action:PayloadAction<IGenre[]>) => {
            state.loading = false
            state.genre = action.payload
        })
        .addCase(loadGenre.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || "Unknown error"
        })


});

export const genreSliceActions = {
    ...genreSlice.actions, loadGenre
}