import axios from 'axios'

export const GetSearchedMovies = async (search, store, setStore) => {

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=pt-BR&page=1`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ4MzdhZTcwNmQ5OTU0ZjA0NzZkYTQ3MTYzYjQwNSIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dHAdEfcztShD7uKNquMVhcDBFyNGQzRaB67PIdEOaIw'
            }
        }
        )
        if (response) {
            const array = response.data.results.filter(result => result.backdrop_path !== null)
            setStore({
                ...store,
                search: "",
                searchedMovies: [...array]
            });
        }
    } catch (error) {
        console.log(error);
    };

}