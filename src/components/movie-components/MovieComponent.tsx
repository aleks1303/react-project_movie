import type {IMovie} from "../../models/IMovie.ts";
import type {FC} from "react";
import {Link} from "react-router-dom";

type PropsMovieType = {
    item:IMovie
}

const MovieComponent:FC<PropsMovieType> = ({item}) => {
    return (
        <div>
            <Link  to={`movie/details/${item.title}`} state={item}>
                <div>
                    <p>{item.id}. {item.title}</p>
                    <img className={'w-50'} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                         alt={item.title}/>
                </div>
            </Link>
        </div>
    );
};

export default MovieComponent;