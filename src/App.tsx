import './App.css'
import {useEffect, useState} from "react";
import type {IMovie} from "./models/IMovie.ts";
import {movieService} from "./services/api.service.tsx";




function App() {
    const [movie, setMovie] = useState<IMovie[]>([])
    useEffect(() => {
        movieService.getMovie()
            .then(response => setMovie(response))
    }, []);
    console.log(movie)
  return (
    <>
        {
            movie.map(item => (<div>{item.id}. {item.title} </div>))
        }
    </>
  )
}

export default App
