import { createContext } from "react";
import defaultImg from '../images/default-actor.jpg'
import { MenuComponent } from "../components/HomePage/menu";
import { SearchBar } from "../components/HomePage/searchBar";
import { HeaderComponent } from "../components/header";
import { GetMoviesByGenre } from "../requests/getMoviesByGenre";
import { TrendsContainer } from "../components/HomePage/trendsContainer";
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
export const defaultActor = defaultImg

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


export const getYearDate = (date) => {
    const releaseDate = new Date(date).toLocaleDateString()
    const splitedDate = releaseDate.trim().split("/");
    return splitedDate[2]
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


export const minsToHours = (mins) => {
    const hours = Math.floor(mins/ 60);          
    const min = mins % 60;
    const hoursText = (`${hours}`).slice(-2);
    const minsText = (`00${min}`).slice(-2);
    
    return `${hoursText }h ${minsText}m`;
  };

export const formatCertification = (certification) => {
    if(certification !== "L") { 
        return `${certification} anos`
    } else if (certification.length < 1) {
        return "Classificação indisponível"
    } else {
        return "Livre"  
    } 
}

export const goBack = (store, setStore, arr1, arr2, params) => {
    if(arr2[0] === 0 && arr2[1] === 7) {
        setStore({
            ...store,
            [params]: [arr1.length-7, arr1.length]
        })
    } else {
        setStore({
            ...store,
            [params]: [arr2[0] - 1, arr2[1] - 1]
        })
    }
}

export const goForward = (store, setStore, arr1, arr2, params) => {
    if(arr2[0] >= 0 && arr2[1] <= arr1.length) {
        setStore({
            ...store,
            [params]:[arr2[0] + 1, arr2[1] + 1]
        })
    } else {
        setStore({
            ...store,
            [params]:[0, 7]
        })
    }
}