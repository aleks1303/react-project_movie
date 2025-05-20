import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import MoviePage from "../pages/MoviePage.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";

const router = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children: ([
            {index:true, element: <MoviePage/>},
            {path: '/movie/details', element: <MovieDetailsPage/>}

        ])
    }
])
export {
    router
}