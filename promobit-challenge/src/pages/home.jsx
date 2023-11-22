import { Header } from "../components/header"
import { Menu } from "../components/menu"
import { MoviesContainer } from "../components/moviesContainer"
import { SearchBar } from "../components/searchBar"
import { TrendsContainer } from "../components/trendsContainer"

export const Home = (props) => {

    console.log(props.searchedMovies)

    return (
        <>
            <Header
                setSearchedMovies={props.setSearchedMovies}
                setGenre={props.setGenre}
            />
            <Menu
                genre={props.genre}
                setGenre={props.setGenre}
            />
            <SearchBar
                search={props.search}
                setSearch={props.setSearch}
                setSearchedMovies={props.setSearchedMovies}
            />
            {props.searchedMovies.length > 0 &&
               <>
                    <MoviesContainer
                        text={"Pesquisados"}
                        setSearchedMovies={props.setSearchedMovies}
                        searchedMovies={props.searchedMovies}
                    />
                </>
            }

            {props.searchedMovies.length < 1 &&
                <TrendsContainer 
                    upcoming={props.upcoming}
                    trending={props.trending}
                    topRated={props.topRated}
                />
            }
        </>
    )
}