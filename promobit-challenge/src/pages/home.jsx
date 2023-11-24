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
                setSearchedMovies={props.setSearchedMovies}
                setGenre={props.setGenre}
            />
            <Menu
                genre={props.genre}
                page={props.page}
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
                    genre={props.genre}
                    page={props.page}
                    sliceParams={props.sliceParams}
                    setSliceParams={props.setSliceParams}
                    genreMovies={props.genreMovies}
                    setPage={props.setPage}
                    setGenreMovies={props.setGenreMovies}
                />
            }
            {props.searchedMovies.length > 0 && props.genreMovies.length < 1 &&
                <>
                    <SearchedMoviesContainer
                        text={"Pesquisados"}
                        setSearchedMovies={props.setSearchedMovies}
                        searchedMovies={props.searchedMovies}
                    />
                </>
            }

            {props.searchedMovies.length < 1 && props.genreMovies.length < 1 &&
                <TrendsContainer
                    upcoming={props.upcoming}
                    trending={props.trending}
                    topRated={props.topRated}
                />
            }

        </>
    )
}