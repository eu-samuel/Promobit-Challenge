import { MovieModel } from "./movieModel"
import { useContext } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { GlobalContext } from "../../assets/exports";

export const SearchedMoviesContainer = (props) => {

    const context = useContext(GlobalContext)
    const { store, setStore } = context.context
               
    return (
        <div className="flex flex-col">
            <span
                className=" flex gap-[.2vw] items-center text-gray-600 font-roboto 
            text-[16px] font-semibold cursor-pointer hover:underline ml-[3.1vw]"
                onClick={() => setStore({
                    ...store,
                    searchedMovies: []
                })}
            >
                <RiArrowLeftSLine /> Voltar
            </span>
            <div className="w-[100vw] flex flex-col mt-2 gap-[1vh] p-2">
                <span className="text-[25px] font-bold text-gray-600 ml-[2.4vw] ">Pesquisados :</span>

                <div className="grid grid-cols-7 mt-[2vh] w-[98vw] ml-[2.5vw] gap-[1vw]" >
                    {store.searchedMovies.filter((movie) => movie.poster_path !== null && movie.released_date !== "")
                    .map((movie, index) => {
                        return (
                            <MovieModel 
                                key={index}
                                movie={movie} 
                            />
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