import { useContext } from "react"
import { Header, Menu, Search, Trends, Genres, Searched, GlobalContext } from "../assets/exports"

export const Home = () => {

    const context = useContext(GlobalContext)

    return (
        <div className="w-[100vw]">
        <Header/>
        <Menu/>
        <Search/>
        {/* <Searched/>
        <Genres/>
        <Trends/>  */}
        </div>
    )
}