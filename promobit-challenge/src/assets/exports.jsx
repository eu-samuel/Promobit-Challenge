import { createContext } from "react";
import { MenuComponent } from "../components/HomePage/menu";
import { SearchBar } from "../components/HomePage/searchBar";
import { HeaderComponent } from "../components/header";
import { GetMovieDetails } from "../requests/getMovieDetails";
import { GetMoviesByGenre } from "../requests/getMoviesByGenre";
import { TrendsContainer } from "../components/HomePage/trendsContainer";
import { GetSearchedMovies } from "../requests/getSearchedMovies";
import { MoviesByGenreContainer } from "../components/HomePage/moviesByGenreContainer";
import { SearchedMoviesContainer } from "../components/HomePage/searchedMoviesContainer";

// Components Exports
export const Search = SearchBar;
export const Menu = MenuComponent;
export const Header = HeaderComponent;
export const Trends = TrendsContainer;
export const Genres = MoviesByGenreContainer;
export const GlobalContext = createContext();
export const Searched = SearchedMoviesContainer;


// Arrays exports

export const pagesList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

export const genresList = [
    { name: "Ação", id: 28 }, 
    { name: "Aventura", id: 12 }, 
    { name: "Animação", id: 16 }, 
    { name: "Comédia", id: 35 }, 
    { name: "Crime", id: 80 }, 
    { name: "Documentário", id: 99 }, 
    { name: "Drama", id: 18 }, 
    { name: "Família", id: 10751 }, 
    { name: "Fantasia", id: 14 }, 
    { name: "História", id: 36 },
    { name: "Terror", id: 27 }, 
    { name: "Musical", id: 10402 }, 
    { name: "Mistério", id: 9648 }, 
    { name: "Romance", id: 10749 }, 
    { name: "Ficção Científica", id: 878 }, 
    { name: "Cinema TV", id: 10770 }, 
    { name: "Thriller", id: 53 }, 
    { name: "Guerra", id: 10752 }, 
    { name: "Faroeste", id: 37 }
];

// Functions Exports

export const setWidth = (item) => {

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
};


export const sendGenre = (item, store, setStore) => {
    GetMoviesByGenre(store, setStore, store.pageFlow, item)
};


export const splitDate = (date) => {
    const releaseDate = new Date(date).toLocaleDateString()
    const splitedDate = releaseDate.trim().split("/");
    return splitedDate
}

export const formatedDate = (date) => {
    const releaseDate = date.split("-")
    return `${releaseDate[2].slice(0,2)}/${releaseDate[1]}/${releaseDate[0]}`
}

export const setRatingColor = (score) => {
    if(score >= 7) {
        return "text-[1.5vw] font-bold text-white bg-[#1bb30d] w-[3.5vw] h-[7vh] items-center justify-center flex rounded-[10vw]"
    } if(score < 7 && score >= 5 ) {
        return "text-[1.5vw] font-bold text-white bg-[#ce8e0f] w-[3.5vw] h-[7vh] items-center justify-center flex rounded-[10vw]"
    } if(score < 5 && score >=3 ) {
        return "text-[1.5vw] font-bold text-white bg-[##FF6633] w-[3.5vw] h-[7vh] items-center justify-center flex rounded-[10vw]"
    } if(score < 3 ) {
        return "text-[1.5vw] font-bold text-white bg-[#DD0000] w-[3.5vw] h-[7vh] items-center justify-center flex rounded-[10vw]"
    }
}
