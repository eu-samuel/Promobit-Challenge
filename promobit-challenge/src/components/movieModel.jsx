import { FaStar } from "react-icons/fa";

export const MovieModel = (props) => {

    const releaseDate = new Date(props.movie.release_date).toLocaleDateString()
    const splitedDate = releaseDate.trim().split("/");

    return (
        <div className="flex flex-col items-center w-[8vw] font-bold font-roboto pb-4 hover:scale-[1.1] duration-200">
            <img src={`https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`}
                className="w-[8vw] shadow-sm shadow-black rounded-md cursor-pointer" alt={`${props.movie.title}`} />
            <div className="flex mt-[1.5vh] gap-[.5vh] flex-col">
                <span className="text-black w-[8vw] text-[12px]">
                    {props.movie.title}
                </span>
                <div className="flex items-center gap-[3vw] text-[#646464] font-[600] font-roboto text-[12px]">
                    <span>
                        {`${splitedDate[2]}`}
                    </span>
                    <div className="flex items-center gap-[.4vw]">
                        <FaStar className="text-yellow-500 relative top-[-.2vh]"/>
                        <span className="text-[#2D0C5E]">{props.movie.vote_average.toString().substr(0, 3)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}