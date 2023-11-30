import axios from 'axios'

export const GetMoviesByGenre = async (store, setStore, page, item) => {

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc&with_genres=${item.id}`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        }
        )
        if (response) {
            if (item !== "") {
                setStore({
                    ...store,
                    pageFlow: page,
                    genre: {
                        name: item.name,
                        id: item.id
                    },
                    byGenreMovies: [...response.data.results]
                })
            } else {
                setStore({
                    ...store,
                    pageFlow: page,
                    byGenreMovies: [...response.data.results]
                })
            }
        }
    } catch (error) {
        console.log(error);
    };

}