import { MoviesCarousel } from "./moviesCarousel";

export const TrendsContainer = (props) => {
    return (
        <div>
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
        </div>
    )
}