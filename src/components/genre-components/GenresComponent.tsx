import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {genreSliceActions} from "../../redux/slices/genre-slice/genreSlice.tsx";
import {Link, useSearchParams} from "react-router-dom";


const GenresComponent = () => {
    const {genre, loading, error} = useAppSelector(({genreSlice}) => genreSlice);
    const dispatch = useAppDispatch();
    const [query] = useSearchParams();
    const selectedGenreId = query.get('genre');
    useEffect(() => {
        dispatch(genreSliceActions.loadGenre())
    }, [ dispatch]);
    if (loading) return (<div>Завантаження...</div>)
    if (error) return (<div>Помилка завантаження</div>)
    if (!Array.isArray(genre)) return <div>Некоректні дані про жанри</div>
    console.log(genre)

    return (
        <div  className="h-[calc(100vh-100px)] overflow-y-auto bg-white p-4">

            {genre.length === 0 && <p>Жанри поки не завантажені</p>}
            <p>Genre: </p>
            {
                genre.map(item =>  {
                    const Active = selectedGenreId === String(item.id)
                    console.log(item.name)

                return (
                    <p key={item.id}>
                        <Link state={item} to={`/?genre=${item.id}&page=1`}
                             className={`  ${Active ? 'text-blue-600 underline' : 'text-black bg-white'}`}>
                        {item.name}
                    </Link>
                    </p>)
                    })}
        </div>

    );

};

export default GenresComponent;

// import {Link, useSearchParams} from "react-router-dom";
//
// import {useEffect} from "react";
// import {genreSliceActions} from "../../redux/slices/genre-slice/genreSlice.tsx";
// import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
// import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
//
//
// const GenresComponent = () => {
//     const {genre, loading, error} = useAppSelector(({genreSlice}) => genreSlice);
//     const dispatch = useAppDispatch();
//     const [query] = useSearchParams();
//     const selectedGenreId = query.get('genre');
//
//     useEffect(() => {
//         dispatch(genreSliceActions.loadGenre());
//     }, [dispatch]);
//
//     if (loading) return <div>Завантаження...</div>;
//     if (error) return <div>Помилка завантаження</div>;
//
//     return (
//         <div className="p-4 bg-gray-100">
//             <p className="text-lg font-bold mb-2">Жанри:</p>
//             <div className="grid grid-cols-2 gap-2">
//                 {genre.map(item => {
//                     const isActive = selectedGenreId === String(item.id);
//                     return (
//                         <Link
//                             key={item.id}
//                             to={`/?genre=${item.id}&page=1`}
//                             state={item}
//                             className={`p-2 rounded-xl transition-all text-sm
//                                 ${isActive ? 'text-white bg-blue-600 underline' : 'text-black bg-white hover:bg-gray-200'}`}
//                         >
//                             {item.name}
//                         </Link>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };
//
// export default GenresComponent;