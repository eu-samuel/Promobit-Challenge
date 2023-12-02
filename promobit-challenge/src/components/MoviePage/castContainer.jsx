import { defaultActor } from "../../assets/exports"

export const CastContainer = (props) => {

    return (
        <div className="w-[100vw] flex flex-col">
            <p className="text-black font-bold text-[1.6vw]">Elenco original</p>
                <div
                    id="carousel"
                    className="w-[80vw] flex gap-[1vh]"
                >
                    <div className="flex gap-[1.34vw]">
                        {props.cast.slice(props.slice[0], props.slice[1]).map((actor, index) =>
                    (
                        <div
                            key={index}
                            className="flex flex-col w-[11vw] font-bold 
                            pl-1 pr-1 pt-3 pb-4 shadow-md shadow-[#D1D1D1] duration-200"
                        >
                            {actor.profile_path ? 
                             <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                                className="w-[9vw] m-auto shadow-sm shadow-black rounded-sm" alt={`${actor.name}`} />
                            :
                            <img src={defaultActor}
                                className="w-[9vw] m-auto shadow-sm shadow-black rounded-sm" alt={`${actor.name}`} />
                            }
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
                    </div>
                </div>
        </div >
    )
}