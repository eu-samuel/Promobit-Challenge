import { Header, genresList } from "../assets/exports";

export const Movie = (props) => {

    const releaseDate = new Date(props.selectedMovie.general_infos.release_date).toLocaleDateString()
    const splitedDate = releaseDate.trim().split("/");

    return (
        <>
            <Header/>
            <section className="bg-[#2D0C5E] h-[70vh] w-[100vw] flex flex-col gap-[2vh]">
                <div className="flex w-[100vw] gap-[3vw] items-center ml-[7vw] mt-[12vh]">
                    <img src={`https://image.tmdb.org/t/p/w400/${props.selectedMovie.general_infos.poster_path}`}
                        className="w-[21vw] shadow-sm shadow-black rounded-md cursor-pointer" alt={`${props.selectedMovie.general_infos.title}`} />

                    <article>
                        <p className="text-[30px] font-roboto font-bold w-[50vw]">{props.selectedMovie.general_infos.title} ({splitedDate[2]})</p>
                        <span className="text-[14px]">• {`${splitedDate[0]}/${splitedDate[1]}/${splitedDate[2]}`} (BR) •</span>
                        {/* {genresNames.map((genre, index) => {
                        return (
                            <>
                            <span key={index} className="text-[14px]"> {genre.name},</span>
                            </>
                        )
                    })
                } */}
                        <div className="flex-flex-col">
                            <span className="font-roboto">Sinopse</span>
                            <p className="w-[50vw] font-[300]">{props.selectedMovie.general_infos.overview}</p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}