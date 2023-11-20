import { Home } from "../pages/home";
import { useState, useEffect } from "react";
import { GetTrendingMovies, GetTopRatedMovies, GetUpcomingMovies } from "../scripts/getMovies"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router () {

    const [filters, setFilters] = useState([]) 
    const [trending, setTrending] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [genres, setGenres] = useState([])

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
                genres={genres}
                setGenres={setGenres}
            />}/>
        </Routes>
        </BrowserRouter>
    )
}