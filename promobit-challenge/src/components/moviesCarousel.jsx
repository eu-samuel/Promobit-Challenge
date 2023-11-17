import { motion } from 'framer-motion'
import { MovieModel } from "./movieModel"

export const MoviesCarousel = (props) => {


    return (
        <motion.div className="w-[100vw] flex flex-col mt-5 p-2 cursor-grab active:cursor-grabbing">
        <span className="text-[25px] font-bold text-gray-600 ml-[2vw] ">{props.text}:</span>

        <motion.div>
            <motion.div id="carousel" className="flex mt-[2vh] ml-[2vw] gap-[1.6vw]" 
            drag='x'
            dragConstraints={{right: 10, left:-2228}}
            >
                {props.movies.map((movie, index) => {
                    return (
                        <MovieModel key={index} movie={movie} />
                    )
                })}
            </motion.div>
        </motion.div>
    </motion.div>
    )
}