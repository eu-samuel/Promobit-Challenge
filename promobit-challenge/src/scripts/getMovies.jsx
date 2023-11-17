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
