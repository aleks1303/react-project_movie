import type {IMovie} from "../../models/IMovie.ts";
import type {FC} from "react";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import GenreName from "../genre-components/GenreName.tsx";

type PropsMovieType = {
    item:IMovie
}

const MovieComponent:FC<PropsMovieType> = ({item}) => {
    const { genre } = useAppSelector(({genreSlice})=> genreSlice);
    const genreNames = item.genre_ids
        .map(id => genre.find(g => g.id === id))
        .filter((g): g is { id: number; name: string } => g !== undefined)
        .map(g => g.name);
    return (
        <div>
            <Link  to={`movie/details/${item.id}`} state={item}>
                <div>

                    <img className={'w-50'} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                         alt={item.title}/>
                    <p>{item.title}</p>
                    <p className={'text-sm'}>{genreNames.map((name, index) => <GenreName key={index} name={name}/>)}</p>
                </div>
            </Link>
        </div>
    );
};

export default MovieComponent;