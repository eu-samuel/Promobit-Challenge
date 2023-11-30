import { motion } from "framer-motion"
import { MovieModel } from "../HomePage/movieModel"

export const RecommendsContainer = (props) => {

    return (
        <div>
            <motion.div className="w-[100vw] flex flex-col p-2 cursor-grab active:cursor-grabbing">
                    <motion.div id="carousel" className="flex ml-[-.4vw] gap-[1.6vw]"
                        drag='x'
                        dragConstraints={{ right: 10, left: -2223 }}
                    >
                        {props.recommends.slice(0,9).map((movie, index) => (
                            <MovieModel
                                key={index}
                                movie={movie}
                            />
                        ))}
                    </motion.div>
                </motion.div>
        </div>
    )
}