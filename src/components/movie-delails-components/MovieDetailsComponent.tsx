import {useLocation} from "react-router-dom";
import StarsRating from "../renting-components/ReatingComponent.tsx";
import type {IMovies} from "../../models/IMovies/IMovies.ts";


const MovieDetailsComponent = () => {
   // const { genre } = useAppSelector(({genreSlice})=> genreSlice);
    const {state} = useLocation();
    const movie = state as IMovies | null
    if (!movie) {
        return ("Фільм не передано")
    }
    const genreNames = movie.genres?.map(g => g.name) || []
    return (
        <div className={'flex bg-orange-50 pb-5'}>
            <div className={'m-2'}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            </div>
            <div className={'text-5xl ml-10 pt-2'}>
                <h1 className={'underline mb-4'}>{movie.title}</h1>
                <div className={'text-sm pl-2 underline text-blue-800'}>
                    {genreNames.map((name, index) => (
                    <span className={'mr-2'} key={index}>{name}</span>))}
                </div>

                <div className={'text-sm pl-2 underline text-blue-800'}>
                    {genreNames.map((name, index) => (
                        <span className={'mr-2'} key={index}>{name}</span>
                    ))}
                </div>


                <div className="mt-2 pl-2"><StarsRating item={movie.vote_average}/></div>
            </div>
        </div>

    );
};

export default MovieDetailsComponent;

//export interface IMovie {
//     adult: boolean;
//     backdrop_path: string;
//     genre_ids: number[];
//     id: number;
//     original_language: string;
//     original_title: string;
//     overview: string;
//     popularity: number;
//     poster_path: string;
//     release_date: string;
//     title: string;
//     video: boolean;
//     vote_average: number;
//     vote_count: number;
// }