import axios from 'axios'

export const GetMovieDetails = async (state, setState, id) => {
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
              setState({general_infos: state, release_date: filtered});
        }
    } catch (error) {
        console.log(error);
    };

}

 