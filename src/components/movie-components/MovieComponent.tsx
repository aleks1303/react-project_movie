import type {FC} from "react";
import {Link} from "react-router-dom";
import GenreName from "../genre-components/GenreName.tsx";
import StarsRating from "../renting-components/ReatingComponent.tsx";
import type {IMovies} from "../../models/IMovies/IMovies.ts";

type PropsMovieType = {
    item:IMovies
}

const MovieComponent:FC<PropsMovieType> = ({item}) => {

    const genreNames = item.genres?.map(g => g.name) || [];

    return (
        <div className={'border-1 rounded-t-md'}>
            <Link  to={`movie/details/${item.id}`} state={item}>
                <div>

                    <img className={'w-100'} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                         alt={item.title}/>
                    <p className={'text-xl pl-2'}>{item.title}</p>
                    <p className={'text-sm pl-2'}>{genreNames.map((name, index) => <GenreName key={index} name={name}/>)}</p>
                    <p className="mt-2" ><StarsRating item={item.vote_average}/></p>

                </div>
            </Link>
        </div>
    );
};

export default MovieComponent;