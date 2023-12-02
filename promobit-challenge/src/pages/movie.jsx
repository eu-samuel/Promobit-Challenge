import {
    Header,
    formatedDate,
    getYearDate,
    GlobalContext,
    setRatingColor,
    minsToHours,
    formatCertification,
    goBack,
    goForward
} from "../assets/exports";
import { useContext } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CrewContainer } from "../components/MoviePage/crewContainer";
import { CastContainer } from "../components/MoviePage/castContainer";
import { RecommendsContainer } from "../components/MoviePage/recommendsContainer";

export const Movie = () => {

    const context = useContext(GlobalContext)
    const { store, setStore } = context.context

    return (
        <>
            <Header />
            <section className="bg-[#2D0C5E] h-[75vh] w-[100vw] font-roboto flex flex-col gap-[2vh]">
                <div className="flex w-[100vw] gap-[3vw] items-center ml-[7vw] mt-[11vh]">
                    <img src={`https://image.tmdb.org/t/p/w400/${store.pageMovie.poster}`}
                        className="w-[23vw] shadow-md shadow-black rounded-md cursor-pointer" alt={`${store.pageMovie.title}`} />

                    <article className="flex absolute text-white top-[10vh] left-[32vw] flex-col gap-[3vh]">
                        <div className="flex flex-col">
                            <p className="text-[32px] font-roboto font-bold w-[60vw]">
                                {store.pageMovie.title} ({getYearDate(store.pageMovie.release_date[0].release_dates[0].release_date)})
                            </p>

                            <div className="flex text-[16px] items-center gap-[.5vw]">
                                {formatCertification(store.pageMovie.certification)}
                                <p className="flex gap-[.5vw]">
                                    <span> • </span>
                                    {formatedDate(store.pageMovie.release_date[0].release_dates[0].release_date)} (BR)
                                    <span> • </span>
                                </p>

                                <div className="flex gap-[.5vw]">
                                    {store.pageMovie.genres.map((genre, index) => (
                                        <span key={index}>
                                            {genre.name}
                                            {index === store.pageMovie.genres.length - 1 ? "" : ","}
                                        </span>
                                    ))}
                                </div>
                                <span>• {minsToHours(store.pageMovie.length)}</span>
                            </div>
                        </div>
                        <div className="flex items-center w-[20vw] gap-[1vw]">
                            <div className={setRatingColor(Number(store.pageMovie.rating.toString().substr(0, 3)))}>
                                <span>
                                    {Number(store.pageMovie.rating.toString().substr(0, 3))}
                                </span>
                            </div>

                            <span className="w-[7vw] font-[400] text-[.94vw]">Avaliação dos usuários</span>
                        </div>
                        <div className="flex flex-col gap-[.5vh]">
                            <span className="font-roboto font-semibold text-[1.3vw]">Sinopse</span>
                            <p className="w-[50vw] text-[.92vw] font-sans font-[400]">{store.pageMovie.overview}</p>
                        </div>
                        <CrewContainer
                            crew={store.pageMovie.crew}
                        />
                    </article>
                </div>
            </section>

            <section className=" ml-[7vw] font-roboto flex flex-col text-black mt-[13vh] gap-[4vh]">

                <div className="flex">
                    <div
                        className="absolute z-10 bg-white mt-[6vh] flex hover:bg-gray-200
                justify-center items-center cursor-pointer text-[2vw] left-0 w-[7vw] h-[37.2vh]"
                        onClick={() => goBack(store, setStore, store.pageMovie.cast, store.castParams, "castParams")}
                    >
                        <IoIosArrowBack />
                    </div>
                    <CastContainer
                        cast={store.pageMovie.cast}
                        slice={store.castParams}
                    />
                    <div className="absolute z-10 bg-white mt-[6vh] flex hover:bg-gray-200
                   justify-center items-center cursor-pointer text-[2vw] right-0 w-[7vw] h-[37.2vh]"
                        onClick={() => goForward(store, setStore, store.pageMovie.cast, store.castParams, "castParams")}>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className="flex flex-col gap-[1.5vh]">
                    <span className="font-bold text-[1.6vw]">
                        Trailer
                    </span>

                    <iframe
                        width="660" height="380"
                        src={`${store.pageMovie.trailer}`}
                        title={`${store.pageMovie.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>

                <div className="flex flex-col gap-[1.5vh]">
                    <span className="font-bold text-[1.6vw]">
                        Recomendações
                    </span>
                    <RecommendsContainer
                        recommends={store.pageMovie.recommended}
                    />
                </div>
            </section>
        </>
    )
}