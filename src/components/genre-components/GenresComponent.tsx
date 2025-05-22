import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {genreSliceActions} from "../../redux/slices/genre-slice/genreSlice.tsx";
import {Link, useSearchParams} from "react-router-dom";


const GenresComponent = () => {
    const {genre, loading, error} = useAppSelector(({genreSlice}) => genreSlice);
    const dispatch = useAppDispatch();
    const [query] = useSearchParams();
    const selectedGenreId = query.get('genre');
    useEffect(() => {
        dispatch(genreSliceActions.loadGenre())
    }, [ dispatch]);
    if (loading) return (<div>Завантаження...</div>)
    if (error) return (<div>Помилка завантаження</div>)
    return (
        <div>
            {
                genre.map(item =>  {
                    const Active = selectedGenreId === String(item.id)

                return (
                          <Link state={item} to={`/?genre=${item.id}&page=1`}
                          className={`  ${Active ? 'text-blue-600 underline' : 'text-black bg-white'}`}>
                            <p>{item.name}</p>
                        </Link>)
                    })}
        </div>
    );
};

export default GenresComponent;
