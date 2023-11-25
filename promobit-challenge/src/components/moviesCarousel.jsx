import { motion } from 'framer-motion'
import { MovieModel } from "./movieModel"

export const MoviesCarousel = (props) => {

    return (
        <motion.div className="w-[100vw] flex flex-col mt-5 p-2 cursor-grab active:cursor-grabbing">
            <span className="text-[24px] font-bold text-gray-600 ml-[2.6vw] ">{props.text}:</span>

            <motion.div className="max-w-[80vw]">
                <motion.div id="carousel" className="flex mt-[2vh] ml-[2.8vw] gap-[4vw]"
                    drag='x'
                    dragConstraints={{ right: 10, left: -2223 }}
                >
                    {props.movies.map((movie, index) => {
                        
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
                </motion.div>
            </motion.div>
        </motion.div>
    )
}