import { useEffect } from "react";
import { Home } from "../pages/home";
import { Movie } from "../pages/movie";
import { GlobalContext } from "../assets/exports";
import { useContextStates } from "../assets/states";
import { GetHomeMovies } from '../requests/getHomeMovies'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {

    const context = useContextStates()

    useEffect(() => { GetHomeMovies(context.store, context.setStore) }, [])

    return (
        <GlobalContext.Provider value={{ context }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={context.store.pageType === "lists" ?
                        < Home />
                        :
                        <Movie />
                    } />
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    )
}