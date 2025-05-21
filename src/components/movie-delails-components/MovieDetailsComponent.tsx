import {useLocation} from "react-router-dom";
import type {IMovie} from "../../models/IMovie.ts";


const MovieDetailsComponent = () => {
    const {state} = useLocation();
    const movie = state as IMovie | null
    if (!movie) {
        return ("Фільм не передано")
    }
    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        </div>
    );
};

export default MovieDetailsComponent;