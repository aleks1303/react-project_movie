import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import MoviePage from "../pages/MoviePage.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import SearchComponent from "../components/search-component/SearchMovieComponent.tsx";

const router = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children: ([
            {index:true, element: <MoviePage/>},
            {path: '/movie/details/:id/', element: <MovieDetailsPage/>},
            {path: '/search', element: <SearchComponent/>},
            {path: '*', element: <NotFoundPage/> }

        ])
    },

])
export {
    router
}