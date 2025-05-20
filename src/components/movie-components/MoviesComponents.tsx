import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {movieSliceActions} from "../../redux/slices/movie-slice/movieSlice.tsx";

const MoviesComponents = () => {
const {movie, loading, error} = useAppSelector(({movieSlice}) => movieSlice);
const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(movieSliceActions.loadMovie())
    }, [dispatch]);
    return (
        <div>
            {loading && <div>Завантаження...</div>}
            {error && <div>Помилка: {error}</div>}
            {
                movie.map(item => (<div>{item.id} {item.title}</div>))
            }

        </div>
    );
};

export default MoviesComponents;