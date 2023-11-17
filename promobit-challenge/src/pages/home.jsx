import { Header } from "../components/header"
import { Menu } from "../components/menu"
import { MoviesCarousel } from "../components/moviesCarousel"


export const Home = (props) => {

    return (
        <>
            <Header />
            <Menu
                genre={props.genre}
                setGenre={props.setGenre}
            />
                <MoviesCarousel
                    text={"Vistos recentemente"}
                    movies={props.upcoming}
                />

                <MoviesCarousel
                    text={"Em alta"}
                    movies={props.trending}
                />
                <MoviesCarousel
                    text={"Melhores avaliados"}
                    movies={props.topRated}
                />
        </>
    )
}