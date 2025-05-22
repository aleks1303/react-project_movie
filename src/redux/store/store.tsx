import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "../slices/movie-slice/movieSlice.tsx";
import {genreSlice} from "../slices/genre-slice/genreSlice.tsx";


const store = configureStore({
    reducer: {
        movieSlice: movieSlice.reducer,
        genreSlice: genreSlice.reducer
    }
});

export {
    store
}
