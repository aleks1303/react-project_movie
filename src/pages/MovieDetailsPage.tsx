import MovieDetailsComponent from "../components/movie-delails-components/MovieDetailsComponent.tsx";
import MenuComponent from "../components/menu-component/MenuComponent.tsx";


const MovieDetailsPage = () => {
    return (
        <div>
            <div className={'flex justify-center'}>
                <MenuComponent/>
            </div>
            <MovieDetailsComponent/>
        </div>
    );
};

export default MovieDetailsPage;