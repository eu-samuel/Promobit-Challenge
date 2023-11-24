import { Home } from "../pages/home";
import { useState, useEffect } from "react";
import { GetTrendingMovies, GetTopRatedMovies, GetUpcomingMovies } from "../scripts/getMovies"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {

    const [search, setSearch] = useState("")
    const [searchedMovies, setSearchedMovies] = useState([])
    const [genreMovies, setGenreMovies] = useState([])
    const [page, setPage] = useState(1)
    const [sliceParams, setSliceParams] = useState({num1: 0, num2: 6})
    const [trending, setTrending] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [genre, setGenre] = useState("")

    useEffect(() => { GetTrendingMovies(setTrending) }, [])
    useEffect(() => { GetTopRatedMovies(setTopRated) }, [])
    useEffect(() => { GetUpcomingMovies(setUpcoming) }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Home
                        trending={trending}
                        topRated={topRated}
                        upcoming={upcoming}
                        genre={genre}
                        search={search}
                        searchedMovies={searchedMovies}
                        page={page}
                        sliceParams={sliceParams}
                        setSliceParams={setSliceParams}
                        setPage={setPage}
                        genreMovies={genreMovies}
                        setGenreMovies={setGenreMovies}
                        setSearchedMovies={setSearchedMovies}
                        setSearch={setSearch}
                        setGenre={setGenre}
                    />} />
            </Routes>
        </BrowserRouter>
    )
}