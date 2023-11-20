import { Header } from "../components/header"
import { Menu } from "../components/menu"
import { MoviesCarousel } from "../components/moviesCarousel"


export const Home = (props) => {

    return (
        <>
            <Header />
            <Menu
                genres={props.genres}
                setGenres={props.setGenres}
            />
            <MoviesCarousel
                text={"Vistos recentemente"}
                movies={props.upcoming}
            />
            <div className="flex flex-col mt-[-5vh]">
                <MoviesCarousel
                    text={"Em alta"}
                    movies={props.trending}
                />
            </div>
            <div className="flex flex-col mt-[-5vh]">
                <MoviesCarousel
                    text={"Melhores avaliados"}
                    movies={props.topRated}
                />
            </div>
        </>
    )
}