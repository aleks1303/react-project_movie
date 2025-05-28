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
    }, [dispatch]);
    if (loading) return (<div>Завантаження...</div>)
    if (error) return (<div>Помилка завантаження</div>)
    return (
        <div className="h-[calc(100vh-100px)] overflow-y-auto bg-black text-white p-4">

            {genre.length === 0 && <p>Жанри поки не завантажені</p>}
            <p>Genre: </p>
            {
                genre.map(item => {
                    const Active = selectedGenreId === String(item.id)
                    console.log(item.name)

                    return (
                        <p key={item.id}>
                            <Link state={item} to={`/?genre=${item.id}&page=1`}
                                  className={`  ${Active ? 'text-blue-400 underline' : 'bg-black text-white'}`}>
                                {item.name}
                            </Link>
                        </p>)
                })}
        </div>
    );
};

export default GenresComponent;