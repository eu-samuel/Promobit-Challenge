import { genresList } from '../assets/API_CONTENT'
import { MenuButton } from '../css/menuButton';

export const Menu = (props) => {

    let selectedGenresId = props.genres.map(item => item.id)

    const setWidth = (item) => {

        if (item.length <= 6) {
            return '5vw'
        }
        if (item.length > 6 && item.length < 9) {
            return '6vw'
        } if (item.length > 12) {
            return '10vw'
        } else {
            return '8vw'
        }
    }

    const removeGenre = (id) => {
        const newGenres = props.genres.filter(genre => genre.id !== id)
        props.setGenres(newGenres)
    }

    const renderButton = (item, index) => {

        if (selectedGenresId.includes(item.id)) {
            return (
            <MenuButton
                key={index}
                onClick={() => removeGenre(item.id)}
                width={setWidth(item.name)}
                className="bg-[#e0900f] text-white text-[13px] rounded-sm flex items-center h-[4vh] font-semibold p-2 w-[10vw] justify-center "
            >
                <span>{item.name}</span>
            </MenuButton>
            )
        } else {
            return <MenuButton
                key={index}
                onClick={() => props.setGenres([...props.genres, { name: item.name, id: item.id }])}
                width={setWidth(item.name)}
                className="bg-white text-black text-[13px] rounded-sm flex items-center h-[4vh] font-semibold p-2 w-[10vw] justify-center"
            >
                <span>{item.name}</span>
            </MenuButton>
        }
    }

    return (
        <section className="bg-[#2D0C5E] h-[55vh] flex flex-col gap-[2vh] items-center justify-center font-roboto">
            <p className="text-[48px] w-[50vw] text-center font-bold">Milhões de filmes, séries e pessoas para descobrir.
                Explore já.</p>
            <span className="text-[14px] font-[400] ">FILTRE POR:</span>

            <div className="flex flex-col mt-[1vh] ml-[2vw] w-[75vw]">
                <ul className="flex w-[95vw] gap-[1vw] mt-[2vh] mb-[2vh]">
                    {genresList.slice(0, 10).map((item, index) => {
                        return (
                            <>
                                {renderButton(item, index)}
                            </>
                        )
                    })}
                </ul>
                <ul className="flex w-[95vw] gap-[1vw] mb-[2vh]">

                    {genresList.slice(10, 18).map((item, index) => {
                        return (
                            <>
                            {renderButton(item, index)}
                        </>

                        )
                    })}
                </ul>
            </div>
        </section>
    )
}