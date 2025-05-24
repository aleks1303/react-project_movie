import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {movieSliceActions} from "../../redux/slices/movie-slice/movieSlice.tsx";
import MovieComponent from "./MovieComponent.tsx";
import {useSearchParams} from "react-router-dom";

const MoviesComponents = () => {
    const {movie, loading, error} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();
    const [query] = useSearchParams();
    const page = query.get('page') || '1'
    const genreId = query.get('genre') || undefined;
    useEffect(() => {
        dispatch(movieSliceActions.loadMovie({page, genreId}))
    }, [genreId, page, dispatch]);

    return (


        <>
            <div>
                {loading && <p>Завантаження...</p>}
                {error && <div>Помилка: {error}</div>}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

                {movie.map(item => (<MovieComponent key={item.id} item={item}/>))}

            </div>
        </>
    );
};

export default MoviesComponents;