import { Home } from "../pages/home";
import { Movie } from "../pages/movie";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GetTrendingMovies, GetTopRatedMovies, GetUpcomingMovies } from "../scripts/getMovies"

export default function Router() {

    const [page, setPage] = useState(1)
    const [genre, setGenre] = useState("")
    const [search, setSearch] = useState("")
    const [trending, setTrending] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [pageType, setPageType] = useState("lists")
    const [genreMovies, setGenreMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState({
        general_infos: {},
        release_date:{}
    })
    const [searchedMovies, setSearchedMovies] = useState([])
    const [sliceParams, setSliceParams] = useState({ num1: 0, num2: 6 })

    useEffect(() => { GetTrendingMovies(setTrending) }, [])
    useEffect(() => { GetTopRatedMovies(setTopRated) }, [])
    useEffect(() => { GetUpcomingMovies(setUpcoming) }, [])

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element=
                    {pageType === "lists" ?
                        < Home
                            page={page}
                            genre={genre}
                            search={search}
                            trending={trending}
                            topRated={topRated}
                            upcoming={upcoming}
                            genreMovies={genreMovies}
                            sliceParams={sliceParams}
                            searchedMovies={searchedMovies}

                            setPage={setPage}
                            setGenre={setGenre}
                            setSearch={setSearch}
                            setPageType={setPageType}
                            setSliceParams={setSliceParams}
                            setGenreMovies={setGenreMovies}
                            setSelectedMovie={setSelectedMovie}
                            setSearchedMovies={setSearchedMovies}

                        />
                        :
                        < Movie
                            selectedMovie={selectedMovie}
                            setGenre={setGenre}
                            setGenreMovies={setGenreMovies}
                            setSearchedMovies={setSearchedMovies}
                        />
                    } />
            </Routes>
        </BrowserRouter>
    )
}