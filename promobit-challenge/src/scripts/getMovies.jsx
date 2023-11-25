import axios from 'axios'

export const GetTrendingMovies = async (setArray) => {

    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        }
        )
        if (response) {
            setArray(response.data.results);
        }
    } catch (error) {
        console.log(error);
    };

}

export const GetTopRatedMovies = async (setArray) => {

    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        }
        )
        if (response) {
            setArray(response.data.results);
        }
    } catch (error) {
        console.log(error);
    };

}

export const GetUpcomingMovies = async (setArray) => {

    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1', {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        }
        )
        if (response) {
            setArray(response.data.results);
        }
    } catch (error) {
        console.log(error);
    };

}

export const GetSearchedMovies = async (setArray, search) => {

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=pt-BR&page=1`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        }
        )
        if (response) {
            const array = response.data.results.filter(result => result.title.toLowerCase().includes(search.toLowerCase()))
            setArray(array);
        }
    } catch (error) {
        console.log(error);
    };

}

export const GetMoviesByGenre = async (setArray, page, id) => {

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc&with_genres=${id}`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        }
        )
        if (response) {
            setArray(response.data.results);
        }
    } catch (error) {
        console.log(error);
    };

}

export const GetMovieDetails = async (object, setObject, id) => {
    try {
        const release_date = await axios.get(`https://api.themoviedb.org/3/movie/${id}/release_dates`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        }
        
        )
        if (release_date) {
            const filtered = release_date.data.results.filter(country => country.iso_3166_1 === "BR")
              setObject({general_infos: object, release_date: filtered});
        }
    } catch (error) {
        console.log(error);
    };

}

 