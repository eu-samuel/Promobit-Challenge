import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { GlobalContext, getYearDate } from "../../assets/exports";
import { GetMovieDetails } from "../../requests/getMovieDetails";

export const MovieModel = (props) => {

    const context = useContext(GlobalContext)
    const { store, setStore } = context.context

    return (
        <div
            onClick={() => GetMovieDetails(store, setStore, props.movie)}
            className="flex flex-col items-center w-[11vw] font-bold font-roboto pb-4 hover:scale-[1.1] duration-200"
        >
            <img src={`https://image.tmdb.org/t/p/w400/${props.movie.poster_path}`}
                className="w-[11vw] shadow-sm shadow-black rounded-md cursor-pointer" alt={`${props.movie.title}`} />
            <div className="flex mt-[1.5vh] gap-[.5vh] mr-[.6vw] flex-col">
                <span className="text-black w-[8vw] text-[.8vw]">
                    {props.movie.title}
                </span>
                <div className="flex items-center gap-[4vw] text-[#646464] 
                    font-[600] font-roboto text-[.8vw]">
                    <span>
                        {props.movie.release_date ? 
                        <>{`${getYearDate(props.movie.release_date)}`}</>
                            :
                            "Indisponível no Brasil"
                        }
                    </span>
                    <div className="flex items-center gap-[.4vw]">
                        <FaStar className="text-yellow-500 relative top-[-.2vh]" />
                        <span className="text-[#2D0C5E]">{props.movie.vote_average.toString().substr(0, 3)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}