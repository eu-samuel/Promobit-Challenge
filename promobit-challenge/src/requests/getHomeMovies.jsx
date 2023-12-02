import axios from 'axios'

export const GetHomeMovies = async (store, setState) => {

    try {
        const response1 = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1', {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        }
        )

        const response2 = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        }
        )

        const response3 = await axios.get('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        }
        )
        if (response1 && response2 && response3) {
            const newStore = {
                ...store, 
                recentMovies: [...response1.data.results.filter((movie) => movie.overview !== "" && movie.backdrop_path !== null)], 
                topRatedMovies: [...response2.data.results.filter((movie) => movie.overview !== "" && movie.backdrop_path !== null)],
                trendingMovies: [...response3.data.results.filter((movie) => movie.overview !== "" && movie.backdrop_path !== null)]
            }
            setState(newStore);
        }
    } catch (error) {
        console.log(error);
    };

}

