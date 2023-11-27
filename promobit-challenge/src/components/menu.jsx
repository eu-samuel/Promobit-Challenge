import { useContext } from 'react';
import { MenuButton } from '../css/menuButton';
import { GlobalContext, genresList, setWidth, sendGenre } from '../assets/exports';


export const MenuComponent = () => {

    const context = useContext(GlobalContext)
    const { store, setStore } = context.context

    const renderButton = (item) => {

        if (store.genre.id === item.id) {
            return (
                <MenuButton
                    onClick={() => setStore({
                        ...store,
                        genre: {
                            name: "",
                            id: ""
                        }
                    })}
                    width={setWidth(item.name)}
                    className="bg-[#e0900f] text-white text-[13px] rounded-sm flex items-center
                 h-[4vh] font-semibold p-2 w-[10vw] justify-center "
                >
                    <span>{item.name}</span>
                </MenuButton>
            )
        } else {
            return <MenuButton
                onClick={() => sendGenre(item, store, setStore)}
                width={setWidth(item.name)}
                className="bg-white border-gray-300 border-[2px] shadow-sm shadow-gray-300
                 text-black text-[13px] rounded-sm flex items-center h-[4vh] font-semibold p-2 w-[10vw] justify-center"
            >
                <span>{item.name}</span>
            </MenuButton>
        }
    }

    return (
        <section className="bg-[#2D0C5E] w-[100vw] h-[55vh] flex flex-col gap-[2vh] items-center justify-center font-roboto">
            <p className="text-[3vw] mt-[5vh] w-[50vw] text-center font-bold">Milhões de filmes, séries e pessoas para descobrir.
                Explore já.</p>
            <span className="text-[16px] font-[700] ">FILTRE POR:</span>

            <div className="flex flex-col mt-[.6vh] ml-[3vw] w-[75vw]">
                <ul className="flex w-[95vw] gap-[1vw] mt-[2vh] mb-[2vh]">
                    {genresList.slice(0, 10).map((item, index) => {
                        return (
                            <div key={index}>
                                {renderButton(item)}
                            </div>
                        )
                    })}
                </ul>
                <ul className="flex w-[95vw] gap-[1vw] mb-[2vh]">

                    {genresList.slice(10, 18).map((item, index) => {
                        return (
                            <div key={index}>
                                {renderButton(item)}
                            </div>

                        )
                    })}
                </ul>
            </div>
        </section>
    )
}