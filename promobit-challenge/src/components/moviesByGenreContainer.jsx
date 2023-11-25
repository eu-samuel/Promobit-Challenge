import { MovieModel } from "./movieModel"
import { RiArrowLeftSLine } from "react-icons/ri";
import { pagesList } from "../assets/API_CONTENT";
import { GetMoviesByGenre } from "../scripts/getMovies";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export const MoviesByGenreContainer = (props) => {

    const setPageFlow = (page) => {
        GetMoviesByGenre(props.setGenreMovies, page, props.genre.id)
        props.setPage(page)
    }

    const setDisplayBack = () => {
        props.setPage(props.page - 1)
        GetMoviesByGenre(props.setGenreMovies, props.page, props.genre.id)
        props.setSliceParams({
            num1: props.sliceParams.num1 - 1,
            num2: props.sliceParams.num2 - 1
        })
    }

    const setDisplayForward = () => {
        props.setPage(props.page + 1)
        GetMoviesByGenre(props.setGenreMovies, props.page, props.genre.id)
        props.setSliceParams({
            num1: props.sliceParams.num1 + 1,
            num2: props.sliceParams.num2 + 1
        })
    }

    return (
        <div className="flex flex-col">
            <span
                className=" flex gap-[.2vw] items-center text-gray-600 font-roboto 
            text-[16px] font-semibold cursor-pointer hover:underline ml-[3.1vw]"
                onClick={() => props.setGenreMovies([])}
            >
                <RiArrowLeftSLine /> Voltar
            </span>


            <div className="w-[100vw] flex flex-col mt-2 gap-[1vh] p-2">
                <span className="text-[25px] font-bold text-gray-600 ml-[2.4vw] ">{props.genre.name && `${props.genre.name} :`}</span>


                <ul className="text-black flex items-center gap-[1vw] mt-[2vh] justify-center pb-[3vh]">
                    {props.sliceParams.num1 >= 1 && <li
                        className="cursor-pointer text-black text-[20px] bg-gray-300 flex items-center 
                     justify-center rounded-xl bg-opacity-60 hover:bg-gray-300 w-[5vw] h-[7vh]"
                    >
                        <SlArrowLeft onClick={() => setDisplayBack()} />
                    </li>
                    }
                    {pagesList.slice(props.sliceParams.num1, props.sliceParams.num2).map((page, index) => {
                        return (
                            <li key={index}
                                onClick={() => setPageFlow(page)}
                                className={props.page === page ?
                                    "cursor-pointer text-black text-[17px] font-roboto bg-gray-400 flex items-center justify-center rounded-xl w-[5vw] h-[7vh]"
                                    :
                                    "cursor-pointer text-black text-[17px] font-roboto bg-gray-300 flex items-center justify-center rounded-xl bg-opacity-60 hover:bg-gray-300 w-[5vw] h-[7vh]"
                                }>
                                {page}
                            </li>
                        )
                    })}
                    {props.sliceParams.num2 < 50 && <li
                        className="cursor-pointer text-black text-[20px] bg-gray-300 flex items-center 
                     justify-center rounded-xl bg-opacity-60 hover:bg-gray-300 w-[5vw] h-[7vh]"
                    >
                        <SlArrowRight
                            onClick={() => setDisplayForward()}
                        />
                    </li>
                    }
                </ul>

                <div className="grid grid-cols-7 mt-[2vh] w-[98vw] ml-[2.5vw] gap-[1vw]" >
                    {props.genreMovies.filter((movie) => movie.poster_path !== null && movie.released_date !== "")
                        .map((movie, index) => {
                            return (
                                <MovieModel 
                                    key={index} 
                                    movie={movie} 
                                    setPageType={props.setPageType}
                                    selectedMovie={props.selectedMovie}
                                    setSelectedMovie={props.setSelectedMovie} 
                                />
                            )
                        })}
                </div>
            </div>

        </div>
    )
}