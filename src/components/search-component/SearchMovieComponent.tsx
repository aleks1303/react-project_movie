import { useAppDispatch } from "../../redux/hooks/useAppDispatch.ts";
import { useAppSelector } from "../../redux/hooks/useAppSelector.ts";
import { searchMovieSliceActions } from "../../redux/slices/searchMovie-slice/searchMovieSlice.tsx";
import { useSearchParams } from "react-router-dom";
import MovieComponent from "../movie-components/MovieComponent.tsx";
import type {FormEvent} from "react";

const SearchComponent = () => {
    const dispatch = useAppDispatch();
    const { movie, loading, error } = useAppSelector(({ searchMovieSlice }) => searchMovieSlice);
    const [queryParams, setQueryParams] = useSearchParams();
    const query = queryParams.get("query") || "";

    const onSearch = (e: FormEvent) => {
        e.preventDefault();
        const input = (e.target as HTMLFormElement).search.value;
        if (input.trim()) {
            setQueryParams({ query: input, page: '1' });
            dispatch(searchMovieSliceActions.searchMovies({ query: input, page: '1' }));
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={onSearch} className="flex items-center gap-2 mb-4">
                <input
                    type="text"
                    name="search"
                    defaultValue={query}
                    placeholder="Пошук фільмів..."
                    className="border rounded p-2 w-64"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Шукати
                </button>
            </form>

            {loading && <p>Завантаження...</p>}
            {error && <p className="text-red-500">Помилка: {error}</p>}
            {!loading && query && movie.length === 0 && <p>Нічого не знайдено</p>}

            {query && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {movie.map(movie => (
                        <MovieComponent key={movie.id} item={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchComponent;