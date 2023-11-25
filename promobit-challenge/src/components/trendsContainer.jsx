import { MoviesCarousel } from "./moviesCarousel";

export const TrendsContainer = (props) => {
    return (
        <div>
            <MoviesCarousel
                text={"Vistos recentemente"}
                movies={props.upcoming}
                setPageType={props.setPageType}
                selectedMovie={props.selectedMovie}
                setSelectedMovie={props.setSelectedMovie}
            />
            <div className="flex flex-col mt-[-5vh]">
                <MoviesCarousel
                    text={"Em alta"}
                    movies={props.trending}
                    setPageType={props.setPageType}
                    selectedMovie={props.selectedMovie}
                    setSelectedMovie={props.setSelectedMovie}
                />
            </div>
            <div className="flex flex-col mt-[-5vh]">
                <MoviesCarousel
                    text={"Melhores avaliados"}
                    movies={props.topRated}
                    setPageType={props.setPageType}
                    selectedMovie={props.selectedMovie}
                    setSelectedMovie={props.setSelectedMovie}
                />
            </div>
        </div>
    )
}