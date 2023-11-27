import { useState } from "react"

export const useContextStates = () => {
    
    const [store, setStore] = useState({
        pageFlow: 1,
        genre: {
            name: "",
            id: ""
        },
        search: "",
        sliceParams: [0, 6],
        recentMovies: [],
        trendingMovies: [],
        topRatedMovies: [],
        byGenreMovies: [],
        searchedMovies: [],
        pageMovie: {
            title: "",
            overview: "",
            restriction: "",
            poster: "",
            rating: "",
            trailer: "",
            length: "",
            roster: [],
            recommended: [],
            genres: [],
            release_date: []
        }
    })
        
    return { store, setStore }
}