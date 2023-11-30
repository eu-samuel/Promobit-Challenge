import { useContext } from "react";
import { MoviesCarousel } from "./moviesCarousel";
import { GlobalContext } from "../../assets/exports";

export const TrendsContainer = () => {

    const context = useContext(GlobalContext)
    const { store, setStore } = context.context

    return (
        <div>
            <MoviesCarousel 
                text={"Vistos recentemente"} 
                movies={store.recentMovies}
            />
            <div className="flex flex-col mt-[-5vh]">
                <MoviesCarousel 
                    text={"Em alta"} 
                    movies={store.trendingMovies}
                />
            </div>
            <div className="flex flex-col mt-[-5vh]">
                <MoviesCarousel 
                    text={"Melhores avaliados"} 
                    movies={store.topRatedMovies}
                />
            </div>
        </div>
    )
}