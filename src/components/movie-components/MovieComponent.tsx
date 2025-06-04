import type {FC} from "react";
import {Link} from "react-router-dom";
import GenreName from "../genre-components/GenreName.tsx";
import StarsRating from "../renting-components/ReatingComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import type {IMovies} from "../../models/IMovies/IMovies.ts";

type PropsMovieType = {
    item: IMovies
}
const MovieComponent: FC<PropsMovieType> = ({item}) => {
    const {genre} = useAppSelector(({genreSlice}) => genreSlice);
    const genreNames = item.genre_ids.map(id => {
        const genres = genre.find(g => g.id === id);
        return genres ? genres.name : "Unknown";
    });
    return (
        <div className={'border-1 rounded-t-md'}>
            <Link to={`movie/details/${item.id}`} state={item}>
                <div className={'bg-black text-white h-full'}>
                    <img className={'w-100'} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                         alt={item.title}/>
                    <p className={'text-xl pl-2'}>{item.title}</p>
                    <p className={'text-sm pl-2 flex flex-wrap'}>{genreNames.map((name, index) => <GenreName key={index}
                                                                                                             name={name}/>)}</p>
                    <p className="mt-2 pl-2"><StarsRating item={item.vote_average}/></p>
                    <p className={'flex ml-2'}>
                        <img className={'w-4 h-4 mt-1'} src="../../../public/icons/icons8-white-like-24.png"
                             alt="icon"/>
                        <span className={'text-sm pt-1 ml-1'}>{item.vote_count}</span>
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default MovieComponent;