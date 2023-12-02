import { useContext } from "react"
import { MovieModel } from "./movieModel"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GlobalContext, goBack, goForward } from "../../assets/exports"

export const MoviesCarousel = (props) => {

    const context = useContext(GlobalContext)
    const { store, setStore } = context.context

    return (
        <div className="w-[100vw] flex flex-col mt-5 p-2">
            <span className="text-[24px] font-bold text-gray-600 ml-[3.6vw] ">{props.text}:</span>

            <div className="max-w-[93vw]">
                 <IoIosArrowBack 
                            className="text-black absolute mt-[13vh] ml-[.5vw] cursor-pointer  text-[2vw]"
                            onClick={() => goBack(store, setStore, props.movies, props.slice, props.params)}
                />
                <div id="carousel" className="flex mt-[2vh] ml-[3.8vw] gap-[4vw]">
                    {props.movies.slice(props.slice[0], props.slice[1]).map((movie) => {
                        return (
                            <MovieModel 
                                key={movie.title}
                                movie={movie}
                            />
                        )
                    })}
                </div>
                
            </div>
            <IoIosArrowForward
                            className="text-black absolute mt-[18.5vh] ml-[94.5vw] cursor-pointer text-[2vw]"
                            onClick={() => goForward(store, setStore, props.movies, props.slice, props.params)}
                />
        </div>
    )
}