import axios from 'axios'

export const GetMovieDetails = async (state, setState, movie) => {
    try {
        const release_date = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/release_dates`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        })

        const details = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?language=pt-BR`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        })

        const credits = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?language=pt-BR`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        })

        const trailer = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=pt-br`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        })

        const recommendations = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/recommendations?language=pt-BR&page=1`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        })
 
        if (details && credits && trailer && recommendations) {

            const filtered = release_date.data.results.filter(country => country.iso_3166_1 === "BR")
 
              setState({
                ...state,
                pageType: "movie",
                pageMovie: {
                ...state.pageMovie,
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                certification: filtered[0].release_dates[0].certification,
                poster: movie.poster_path,
                rating: movie.vote_average,
                trailer: `https://www.youtube.com/embed/${trailer.data.results[0].key}?si=${trailer.data.results[0].id}`,
                length: "",
                cast: credits.data.cast,
                crew: credits.data.crew,
                recommended: recommendations.data.results.filter((movie) => movie.backdrop_path !== null),
                genres: details.data.genres,
                release_date: filtered
                }
            });
        }
    } catch (error) {
        alert(error);
    };

}

 