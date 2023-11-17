import { Home } from "../pages/home";
import { useState, useEffect } from "react";
import { GetTrendingMovies, GetTopRatedMovies, GetUpcomingMovies } from "../scripts/getMovies"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router () {

    const [trending, setTrending] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])
    
    const [genre, setGenre] = useState("")

    useEffect(() => { GetTrendingMovies(setTrending) }, [])
    useEffect(() => { GetTopRatedMovies(setTopRated) }, [])
    useEffect(() => { GetUpcomingMovies(setUpcoming) }, [])

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={
            <Home 
                trending={trending}
                topRated={topRated}
                upcoming={upcoming}
                genre={genre}
                setGenre={setGenre}
            />}/>
        </Routes>
        </BrowserRouter>
    )
}