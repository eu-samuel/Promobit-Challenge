import { Header } from "../components/header"
import { Menu } from "../components/menu"
import { SearchedMoviesContainer } from "../components/searchedMoviesContainer"
import { SearchBar } from "../components/searchBar"
import { TrendsContainer } from "../components/trendsContainer"
import { MoviesByGenreContainer } from "../components/moviesbyGenreContainer"

export const Home = (props) => {

    return (
        <>
            <Header
                setGenre={props.setGenre}
                setPageType={props.setPageType}
                setGenreMovies={props.setGenreMovies}
                setSearchedMovies={props.setSearchedMovies}
            />
            <Menu
                page={props.page}
                genre={props.genre}
                setGenre={props.setGenre}
                setGenreMovies={props.setGenreMovies}
            />
            <SearchBar
                search={props.search}
                setSearch={props.setSearch}
                setSearchedMovies={props.setSearchedMovies}
            />
            {props.genreMovies.length > 0 && props.searchedMovies.length < 1 &&
                <MoviesByGenreContainer
                    page={props.page}
                    genre={props.genre}
                    setPage={props.setPage}
                    sliceParams={props.sliceParams}
                    genreMovies={props.genreMovies}
                    setPageType={props.setPageType}
                    selectedMovie={props.selectedMovie}
                    setSliceParams={props.setSliceParams}
                    setGenreMovies={props.setGenreMovies}
                    setSelectedMovie={props.setSelectedMovie}
                />
            }
            {props.searchedMovies.length > 0 && props.genreMovies.length < 1 &&
                <>
                    <SearchedMoviesContainer
                        text={"Pesquisados"}
                        setPageType={props.setPageType}
                        selectedMovie={props.selectedMovie}
                        searchedMovies={props.searchedMovies}
                        setSearchedMovies={props.setSearchedMovies}
                        setSelectedMovie={props.setSelectedMovie}
                    />
                </>
            }

            {props.searchedMovies.length < 1 && props.genreMovies.length < 1 &&
                <TrendsContainer
                    upcoming={props.upcoming}
                    trending={props.trending}
                    topRated={props.topRated}
                    setPageType={props.setPageType}
                    selectedMovie={props.selectedMovie}
                    setSelectedMovie={props.setSelectedMovie}
                />
            }

        </>
    )
}