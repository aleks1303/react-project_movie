import {createAsyncThunk, createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {movieService} from '../../../services/api.service';
import type {IMovies} from "../../../models/IMovies/IMovies.ts";

interface ISearchMovie {
    movie: IMovies[];
    loading: boolean;
    error: string | null;
}

const initSearchMovie: ISearchMovie = {
    movie: [],
    loading: false,
    error: null
};

const searchMovies = createAsyncThunk(
    'searchMovieSlice/searchMovies',
    async ({ query, page }: { query: string; page: string }, thunkAPI) => {
        try {
            const movies = await movieService.searchMovieByQuery(query, page);
            return thunkAPI.fulfillWithValue(movies);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const searchMovieSlice = createSlice({
    name: 'searchMovieSlice',
    initialState: initSearchMovie,
    reducers: {},
    extraReducers: builder => builder
            .addCase(searchMovies.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchMovies.fulfilled, (state, action:PayloadAction<IMovies[]>) => {
                state.loading = false;
                state.movie = action.payload;
            })
            .addCase(searchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Unknown error"
            }),
});

export const searchMovieSliceActions = {
    ...searchMovieSlice.actions, searchMovies };
