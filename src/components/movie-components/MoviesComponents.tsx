import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {movieSliceActions} from "../../redux/slices/movie-slice/movieSlice.tsx";
import MovieComponent from "./MovieComponent.tsx";

const MoviesComponents = () => {
const {movie, loading, error} = useAppSelector(({movieSlice}) => movieSlice);
const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieSliceActions.loadMovie())
    }, [dispatch]);

    return (
        <div>
            {loading && <p>Завантаження...</p>}
            {error && <div>Помилка: {error}</div>}
            {
                movie.map(item => (<MovieComponent key={item.id} item={item}/>))
            }

        </div>
    );
};

export default MoviesComponents;