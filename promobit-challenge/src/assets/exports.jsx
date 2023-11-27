import { createContext } from "react";
import { MenuComponent } from "../components/menu";
import { SearchBar } from "../components/searchBar";
import { HeaderComponent } from "../components/header";
import { GetMoviesByGenre } from "../requests/getMoviesByGenre";
import { TrendsContainer } from "../components/trendsContainer";
import { MoviesByGenreContainer } from "../components/moviesbyGenreContainer";
import { SearchedMoviesContainer } from "../components/searchedMoviesContainer";
import { GetSearchedMovies } from "../requests/getSearchedMovies";

// Components Exports
export const Search = SearchBar;
export const Menu = MenuComponent;
export const Header = HeaderComponent;
export const Trends = TrendsContainer;
export const Genres = MoviesByGenreContainer;
export const GlobalContext = createContext();
export const Searched = SearchedMoviesContainer;


// Arrays exports

export const pagesList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50 ];

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
    setStore(
        {...store, 
        genre: {
            name: item.name, 
            id: item.id
        }
    })
    GetMoviesByGenre(store, setStore, store.pageFlow, item.id)
};

export const startSearch = (store, setStore) => {
    GetSearchedMovies(setStore, store.search)
    setStore({
        ...store,
        search: ""
    })
}