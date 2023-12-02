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
                slice={store.recentParams}
                params={"recentParams"}
            />
            <div className="flex flex-col mt-[-5vh]">
                <MoviesCarousel 
                    text={"Em alta"} 
                    movies={store.trendingMovies}
                    slice={store.trendsParams}
                    params={"trendsParams"}
                />
            </div>
            <div className="flex flex-col mt-[-5vh]">
                <MoviesCarousel 
                    text={"Melhores avaliados"} 
                    movies={store.topRatedMovies}
                    slice={store.topRatedParams}
                    params={"topRatedParams"}
                />
            </div>
        </div>
    )
}