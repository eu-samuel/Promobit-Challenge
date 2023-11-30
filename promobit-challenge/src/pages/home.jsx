import { useContext } from "react"
import {
    Header,
    Menu,
    Search,
    Trends,
    Genres,
    Searched,
    GlobalContext
} from "../assets/exports"

export const Home = () => {

    const context = useContext(GlobalContext)
    const { store } = context.context

    return (
        <div className="w-[100vw]">
            <Header />
            <Menu />
            <Search />
            {store.searchedMovies.length > 0 && store.byGenreMovies.length < 1 ?
                <Searched />
                :
                <Genres />
            }
            { store.byGenreMovies.length < 1 && store.searchedMovies.length < 1 && <Trends /> }
        </div>
    )
}