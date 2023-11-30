import { useState } from "react"

export const useContextStates = () => {
    
    const [store, setStore] = useState({
        pageFlow: 1,
        pageType: "lists",
        genre: {
            name: "",
            id: ""
        },
        search: "",
        recentMovies: [],
        trendingMovies: [],
        topRatedMovies: [],
        byGenreMovies: [],
        searchedMovies: [],
        pageMovie: {
            id: "",
            title: "",
            overview: "",
            certification: "",
            poster: "",
            rating: "",
            trailer: "",
            length: "",
            cast: [],
            crew: [],
            recommended: [],
            genres: [],
            release_date: ""
        }
    })
        
    return { store, setStore }
}