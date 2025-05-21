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
   async (_, thunkAPI) => {
     try {
         const movie = await movieService.getAllMovie()
         return (movie)
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
            console.log('pending...')
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

// ype userSliceType = {
//     users: IUser[],
//     loading: boolean,
//     error: string | null
// }
// const userInitSlice:userSliceType = {
//     users:[],
//     loading: false,
//     error: null
// }
//
// const loadUsers = createAsyncThunk(
//     "userSlice/loadUsers",
//     async (_, thunkAPI) => {
//         try {
//             const users = await getAll<IUser[]>('/users')
//             return thunkAPI.fulfillWithValue(users)
//         }catch (e) {
//             return thunkAPI.rejectWithValue(e)
//         }
//
//     }
// );
//
// export const userSlice = createSlice({
//     name: "userSlice",
//     initialState: userInitSlice,
//     reducers: {},
//     extraReducers: builder => builder
//         .addCase(loadUsers.pending, (state) => {
//             state.loading = true
//             state.error = null
//         })
//         .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
//             state.loading = false
//             state.users = action.payload
//         })
//         .addCase(loadUsers.rejected, (state, action) => {
//             state.loading = false
//             state.error = action.error.message || 'Unknown error'
//         })
// });
//
// export const userSliceActions = {
//     ...userSlice, loadUsers
//
