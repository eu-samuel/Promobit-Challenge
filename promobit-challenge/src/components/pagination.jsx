import { useContext } from "react"
import { pagesList } from "../assets/exports";
import { GetMoviesByGenre } from "../requests/getMoviesByGenre";
import { GlobalContext } from "../assets/exports"

export const Pagination = () => {


    const context = useContext(GlobalContext)
    const { store, setStore } = context.context


    return (
        <ul className="text-black flex items-center gap-[1vw] mt-[2vh] justify-center pb-[3vh]">
            {pagesList.map((page, index) => {
                return (
                    <li 
                        key={index}
                        value={store.pageFlow}
                        onChange={() => setStore({...store, pageFlow: e.target.value})}
                        onClick={() => GetMoviesByGenre(store, setStore, page, "")}
                        className={store.pageFlow === page ?
                            "cursor-pointer text-black text-[17px] font-roboto bg-gray-400 flex items-center justify-center rounded-xl w-[5vw] h-[7vh]"
                            :
                            "cursor-pointer text-black text-[17px] font-roboto bg-gray-300 flex items-center justify-center rounded-xl bg-opacity-60 hover:bg-gray-300 w-[5vw] h-[7vh]"
                        }>
                        {page}
                    </li>
                )
            })}
        </ul>
    )
}