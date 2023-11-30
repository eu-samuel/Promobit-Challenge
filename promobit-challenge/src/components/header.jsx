import Logo from '../images/logo.png'
import { useContext } from 'react'
import { GlobalContext } from '../assets/exports'

export const HeaderComponent = (props) => {

    
    const context = useContext(GlobalContext)
    const { store, setStore } = context.context

    return (
        <header className ="fixed top-0 w-[100vw] z-50 bg-[#5C16C5] p-[.8vw]">
        <img src={Logo} 
            alt="Logo da TMDB" 
            className="w-[7vw] ml-[5vw] cursor-pointer" 
            onClick={() => setStore({
                ...store,
                pageType: "lists",
                genre: "",
                searchedMovies: []
            })}
        />
        </header>
    )
}