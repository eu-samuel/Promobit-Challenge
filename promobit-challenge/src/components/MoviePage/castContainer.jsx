import { motion } from "framer-motion"

export const CastContainer = (props) => {

    return (
        <div>
            <p className="text-black font-bold text-[1.6vw]">Elenco original</p>
            <motion.div className="w-[100vw] flex flex-col p-2 cursor-grab active:cursor-grabbing">
                    <motion.div id="carousel" className="flex ml-[-.4vw] gap-[2vw]"
                        drag='x'
                        dragConstraints={{ right: 10, left: -2223 }}
                    >
                        {props.cast.slice(0,6).map((actor, index) => 
                        (
                                <div
                                    key={index}
                                    className="flex flex-col w-[12vw] font-bold pl-2 pr-2 pt-3 pb-4 shadow-md shadow-[#D1D1D1] duration-200"
                                >
                                    <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                                        className="w-[10vw] m-auto shadow-sm shadow-black rounded-sm" alt={`${actor.name}`} />
                                    <div className="flex mt-[1.5vh] ml-[.5vw] gap-[.5vh] flex-col">
                                        <span className="w-[10vw] text-[14px]">
                                            {actor.name}
                                        </span>
                                        <div className="flex items-center gap-[3vw] font-[400] text-[13px]">
                                            <span>
                                                {actor.character}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </motion.div>
                </motion.div>
        </div>
    )
}