import { genres } from '../assets/API_CONTENT'

export const Menu = () => {
    return (
        <section className="bg-[#2D0C5E] h-[55vh] flex flex-col gap-[2vh] items-center justify-center font-roboto">
            <p className="text-[48px] w-[50vw] text-center font-bold">Milhões de filmes, séries e pessoas para descobrir.
                Explore já.</p>
            <span className="text-[14px] font-[400] ">FILTRE POR:</span>

            <ul className="grid grid-cols-10 text-center gap-[1vw] mt-[2vh] mb-[2vh]">
                {genres.map((item) => {
                    return (
                        <>
                            <button className="bg-white text-black rounded-[.3vw] flex items-center justify-center
                            min-w-[6vw] p-[.5vw] h-[5vh] cursor-pointer active:scale-[0.99]">
                                <span className="text-[13px] font-semibold">{item}</span>
                            </button>
                        </>

                    )
                })}
            </ul>
        </section>
    )
}