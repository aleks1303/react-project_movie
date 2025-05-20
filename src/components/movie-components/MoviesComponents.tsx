import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {movieSliceActions} from "../../redux/slices/movie-slice/movieSlice.tsx";

const MoviesComponents = () => {
const {movie, landing, error} = useAppSelector(({movieSlice}) => movieSlice);
const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(movieSliceActions.loadMovie())
    }, [dispatch]);
    return (
        <div>
            {
                landing
            }
            {
                movie.map(item => (<div>{item.id} {item.title}</div>))
            }
            {error}
        </div>
    );
};

export default MoviesComponents;