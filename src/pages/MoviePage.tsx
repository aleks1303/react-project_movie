import MoviesComponents from "../components/movie-components/MoviesComponents.tsx";
import PaginationComponent from "../components/pagination-component/PaginationComponent.tsx";
import GenresComponent from "../components/genre-components/GenresComponent.tsx";
import MenuComponent from "../components/menu-component/MenuComponent.tsx";


const MoviePage = () => {
    return (
        <div>
            <MenuComponent/>
            <GenresComponent/>
            <PaginationComponent/>
            <MoviesComponents/>
        </div>
    );
};

export default MoviePage;