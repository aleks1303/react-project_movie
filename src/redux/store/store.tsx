import {configureStore} from "@reduxjs/toolkit";
import {movieDetailsSlice} from "../slices/movieDetailsSlice.tsx";
import {movieSlice} from "../slices/movie-slice/movieSlice.tsx";

const store = configureStore({
    reducer: {
        movieSlice: movieSlice.reducer,
        movieDetailsSlice: movieDetailsSlice.reducer
    }
});

export {
    store
}
