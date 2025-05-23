import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {type FormEvent, useState} from "react";
import {searchMovieSliceActions} from "../../redux/slices/searchMovie-slice/searchMovieSlice.tsx";
import MovieComponent from "../movie-components/MovieComponent.tsx";


const SearchComponent = () => {
    const dispatch = useAppDispatch();
    const { movie, loading, error } = useAppSelector(({searchMovieSlice}) => searchMovieSlice);
    const [query, setQuery] = useState('');
    const [searchExecuted, setSearchExecuted] = useState(false);

    const onSearch = (e: FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            dispatch(searchMovieSliceActions.searchMovies({ query, page: '1' }));
            setSearchExecuted(true);
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={onSearch} className="flex items-center gap-2 mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Пошук фільмів..."
                    className="border rounded p-2 w-64"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Шукати
                </button>
            </form>

            {loading && <p>Завантаження...</p>}
            {error && <p className="text-red-500">Помилка: {error}</p>}
            {!loading && searchExecuted && movie.length === 0 && <p>Нічого не знайдено</p>}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movie.map(movie => (
                    <MovieComponent key={movie.id} item={movie} />
                ))}
            </div>
        </div>
    );
};

export default SearchComponent;