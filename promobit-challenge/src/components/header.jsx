import Logo from '../images/logo.png'
import { useContext } from 'react'
import { GlobalContext } from '../assets/exports'

export const HeaderComponent = (props) => {

    
    const context = useContext(GlobalContext)
    const { store } = context.context

    const clearFilters = () => {
        setMovies({
            recent: movies.recent,
            trending: movies.trending,
            topRated: movies.topRated,
            bySearch: [],
            byGenre: []
        })
        setSettings({

        })
    }

    return (
        <header className ="absolute top-0 w-[100vw] z-50 bg-[#5C16C5] p-[.8vw]">
        <img src={Logo} 
            alt="Logo da TMDB" 
            className="w-[7vw] ml-[5vw] cursor-pointer" 
            onClick={() => clearFilters()}
        />
        </header>
    )
}