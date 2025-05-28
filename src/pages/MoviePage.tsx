import {useSearchParams} from "react-router-dom";
import MoviesComponents from "../components/movie-components/MoviesComponents.tsx";
import PaginationComponent from "../components/pagination-component/PaginationComponent.tsx";
import GenresComponent from "../components/genre-components/GenresComponent.tsx";
import MenuComponent from "../components/menu-component/MenuComponent.tsx";
import SearchComponent from "../components/search-component/SearchMovieComponent.tsx";

const MoviePage = () => {
    const [queryParams] = useSearchParams();
    const query = queryParams.get("query");

    return (
        <div className={"h-screen flex flex-col"}>
            <div className={'sticky top-0 z-20 bg-gray-300 shadow-md px-4 py-2 flex justify-between'}>
                <div className={'mt-4'}>
                    <MenuComponent/>
                </div>
                <div><SearchComponent/></div>

            </div>
            <div className={"sticky top-[60px] z-10 bg-gray-200 py-2 justify-center flex"}>
                <PaginationComponent/>
            </div>
            {!query && (
                <div className="flex flex-1 overflow-y-auto">
                    <div className={"w-1/5 overflow-y-auto border-r p-4 bg-gray-100"}><GenresComponent/></div>
                    <div className={"flex-1 overflow-y-scroll p-4 m-4"}><MoviesComponents/></div>
                </div>
            )}
        </div>
    );
};

export default MoviePage;