import {useParams} from "react-router-dom";
import StarsRating from "../renting-components/ReatingComponent.tsx";


// const MovieDetailsComponent = () => {
//    // const { genre } = useAppSelector(({genreSlice})=> genreSlice);
//   const [id] = useParams();
//
//     if (!movie) {
//         return ("Фільм не передано")
//     }
//     const genreNames = movie.genres?.map(g => g.name) || []
//     return (
//         <div className={'flex bg-orange-50 pb-5'}>
//             <div className={'m-2'}>
//                 <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
//             </div>
//             <div className={'text-5xl ml-10 pt-2'}>
//                 <h1 className={'underline mb-4'}>{movie.title}</h1>
//                 <div className={'text-sm pl-2 underline text-blue-800'}>
//                     {genreNames.map((name, index) => (
//                     <span className={'mr-2'} key={index}>{name}</span>))}
//                 </div>
//
//                 <div className={'text-sm pl-2 underline text-blue-800'}>
//                     {genreNames.map((name, index) => (
//                         <span className={'mr-2'} key={index}>{name}</span>
//                     ))}
//                 </div>
//
//
//                 <div className="mt-2 pl-2"><StarsRating item={movie.vote_average}/></div>
//             </div>
//         </div>
//
//     );
// };
//


import {useEffect} from "react";


import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {movieSliceActions} from "../../redux/slices/movie-slice/movieSlice.tsx";

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
        <div className="p-6 bg-orange-50 flex gap-6">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-80" />
            <div>
                <h1 className="text-4xl underline">{movie.title}</h1>
                <div className="mt-2 flex gap-2 flex-wrap">
                    {movie.genres.map(g => (
                        <span key={g.id} className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {g.name}
                        </span>
                    ))}
                </div>
                <div className="mt-4"><StarsRating item={movie.vote_average}/></div>
                <p>{movie.budget}</p>
            </div>
        </div>
    );
};

export default MovieDetailsComponent;