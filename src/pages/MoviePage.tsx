// import MoviesComponents from "../components/movie-components/MoviesComponents.tsx";
// import PaginationComponent from "../components/pagination-component/PaginationComponent.tsx";
// import GenresComponent from "../components/genre-components/GenresComponent.tsx";
// import MenuComponent from "../components/menu-component/MenuComponent.tsx";
//
//
// const MoviePage = () => {
//     return (
//         <div>
//             <MenuComponent/>
//             <GenresComponent/>
//             <PaginationComponent/>
//             <MoviesComponents/>
//         </div>
//     );
// };
//
// export default MoviePage;

import { useSearchParams } from "react-router-dom";
import MoviesComponents from "../components/movie-components/MoviesComponents.tsx";
import PaginationComponent from "../components/pagination-component/PaginationComponent.tsx";
import GenresComponent from "../components/genre-components/GenresComponent.tsx";
import MenuComponent from "../components/menu-component/MenuComponent.tsx";
import SearchComponent from "../components/search-component/SearchMovieComponent.tsx";

const MoviePage = () => {
    const [queryParams] = useSearchParams();
    const query = queryParams.get("query");

    return (
        <div>
            <div className={'flex'}>
                <MenuComponent/>
                <SearchComponent/>
            </div>
            {!query && (
                <>
                    <GenresComponent />
                    <PaginationComponent />
                    <MoviesComponents />
                </>
            )}
        </div>
    );
};

export default MoviePage;