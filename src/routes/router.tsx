import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import MoviePage from "../pages/MoviePage.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import SearchPage from "../pages/SearchPage.tsx";

const router = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children: ([
            {index:true, element: <MoviePage/>},
            {path: 'search', element: <SearchPage/>},
            {path: 'movie/details/:id', element: <MovieDetailsPage/>},
            {path: '*', element: <NotFoundPage/> }

        ])
    },

])
export {
    router
}