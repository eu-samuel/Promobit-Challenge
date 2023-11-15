import Logo from '../images/logo.png'

export const Header = () => {
    return (
        <header className ="w-[100vw] bg-[#5C16C5] p-[.8vw]">
        <img src={Logo} alt="Logo da TMDB" className="w-[7vw] ml-[5vw]"/>
        </header>
    )
}