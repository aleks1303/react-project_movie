import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "../slices/movie-slice/movieSlice.tsx";
import {genreSlice} from "../slices/genre-slice/genreSlice.tsx";
import {searchMovieSlice} from "../slices/searchMovie-slice/searchMovieSlice.tsx";




const store = configureStore({
    reducer: {
        movieSlice: movieSlice.reducer,
        genreSlice: genreSlice.reducer,
       searchMovieSlice: searchMovieSlice.reducer
    }
});

export {
    store
}
