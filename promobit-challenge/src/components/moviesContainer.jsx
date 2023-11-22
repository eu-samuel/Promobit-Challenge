import { MovieModel } from "./movieModel"
import { RiArrowLeftSLine } from "react-icons/ri";

export const MoviesContainer = (props) => {
               
    return (
        <div className="flex flex-col">
            <span
                className=" flex gap-[.2vw] items-center text-gray-600 font-roboto 
            text-[16px] font-semibold cursor-pointer hover:underline ml-[3.1vw]"
                onClick={() => props.setSearchedMovies([])}
            >
                <RiArrowLeftSLine /> Voltar
            </span>
            <div className="w-[100vw] flex flex-col mt-2 gap-[1vh] p-2">
                <span className="text-[25px] font-bold text-gray-600 ml-[2.4vw] ">{props.text}:</span>

                <div className="grid grid-cols-7 mt-[2vh] w-[98vw] ml-[2.5vw] gap-[1vw]" >
                    {props.searchedMovies.filter((movie) => movie.poster_path !== null && movie.released_date !== "")
                    .map((movie, index) => {
                        return (
                            <MovieModel key={index} movie={movie} />
                        )
                    })}
                </div>
                <ul className="text-black flex gap-[1vw] mt-[2vh] justify-center">
                    <li>1</li>
                    <li>1</li>
                </ul>
            </div>
        </div>
    )
}