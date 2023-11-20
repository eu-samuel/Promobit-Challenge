import { setMonth } from "../assets/API_CONTENT";
import { motion } from "framer-motion";

export const MovieModel = (props) => {

    const releaseDate = new Date(props.movie.release_date).toLocaleDateString()
    const splitedDate = releaseDate.trim().split("/");
    const formatedDay = Number(releaseDate[0] + releaseDate[1])
  
    return (
        <motion.div className="flex flex-col items-center font-bold font-roboto pb-4 hover:scale-[1.06] duration-200">
            <img src={`https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`}
                className="w-[10vw] shadow-sm shadow-black rounded-md cursor-pointer" alt={`${props.movie.title}`} />
            <motion.div className="flex mt-[1.5vh] gap-[.5vh] flex-col">
                <span className="text-black w-[10vw] text-[12.3px]">
                    {props.movie.title}
                </span>
                <span className="text-[#646464] font-[600] font-roboto text-[13px]">
                    {`${splitedDate[2]}`}
                </span>
            </motion.div>
        </motion.div>
    )
}