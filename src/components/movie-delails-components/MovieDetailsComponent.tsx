import {useParams} from "react-router-dom";
import StarsRating from "../renting-components/ReatingComponent.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {movieSliceActions} from "../../redux/slices/movie-slice/movieSlice.tsx";
import CountryProductComponent from "./CountryProductComponent.tsx";
import CompanyComponent from "./CompanyComponent.tsx";
import LanguageComponent from "./LanguageComponent.tsx";


const MovieDetailsComponent = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {movie, loading, error} = useAppSelector(state => state.movieSlice);

    useEffect(() => {
        if (id) dispatch(movieSliceActions.loadMovieDetails(id));
    }, [id, dispatch]);

    if (loading) return <div>Завантаження...</div>;
    if (error) return <div>Помилка: {error}</div>;
    if (!movie) return <div>Фільм не знайдено</div>;

    return (
        <div className={"p-3 bg-gray-100 flex gap-6"}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-120"/>
            <div>
                <h1 className={"text-4xl underline"}>{movie.title}</h1>
                <p>{movie.tagline}</p>
                <div className={"mt-2 flex gap-2 flex-wrap"}>
                    {movie.genres.map(g => (
                        <span key={g.id} className={"text-sm bg-gray-600 text-white px-2 py-1 rounded-full"}>
                            {g.name}
                        </span>
                    ))}
                </div>
                <div className={"mt-4 flex"}>
                    <StarsRating item={movie.vote_average}/>
                    <p className={'flex ml-4'}>
                        <img className={'w-5 h-5'} src="/icons/icons8-like-24.png" alt="icon"/>
                        <span className={'text-sm ml-1'}>{movie.vote_count}</span>
                    </p>
                </div>
                <div className={"mt-4 bg-gray-300"}>Description:<p>{movie.overview}</p></div>
                <p className={'mt-4'}>Budget: {movie.budget} $</p>
                <p>Revenue: {movie.revenue} $</p>
                <p className={'mt-4 bg-gray-300'}>Country: {movie.production_countries.map((country, index) =>
                    (<CountryProductComponent key={index} country={country}/>))}</p>
                <p className={'mt-4'}>Product: {movie.production_companies.map(company =>
                    (<CompanyComponent key={company.id} company={company}/>))}</p>
                <p className={'mt-4 bg-gray-300'}>Language: {movie.spoken_languages.map((language, index) =>
                    (<LanguageComponent key={index} language={language}/>))}</p>
                <p className={'mt-4'}>Release date: {movie.release_date}</p>
                <p className={'mt-4 bg-gray-300'}>Runtime: {movie.runtime} min</p>
            </div>
        </div>
    );
};

export default MovieDetailsComponent;