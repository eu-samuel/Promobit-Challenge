import Logo from '../images/logo.png'

export const Header = (props) => {

    const clearFilters = () => {
        props.setSearchedMovies([])
        props.setGenreMovies([])
        props.setGenre("")
        props.setPageType("lists")
    }

    return (
        <header className =" fixed w-[100vw] z-50 bg-[#5C16C5] p-[.8vw]">
        <img src={Logo} 
            alt="Logo da TMDB" 
            className="w-[7vw] ml-[5vw] cursor-pointer" 
            onClick={() => clearFilters()}
        />
        </header>
    )
}