export const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODIwOWQ5MTMzZGM4MTM0YzQ2MDVmZTczYmFmOTIzOCIsInN1YiI6IjY1NTQ1OTdiNTM4NjZlMDBmZjA2NTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ROtiSSLpQaKLjgi0UKnxZ8OOMr_Gh4M3sjVhIE48Aho"

export const setMonth = (ref) => {
    if (ref === "01") {
        return "JAN"
    } if (ref === "02") {
        return "FEV"
    } if (ref === "03") {
        return "MAR"
    } if (ref === "04") {
        return "ABR"
    } if (ref === "05") {
        return "MAI"
    } if (ref === "06") {
        return "JUN"
    } if (ref === "07") {
        return "JUL"
    } if (ref === "08") {
        return "AGO"
    } if (ref === "09") {
        return "SET"
    } if (ref === "10") {
        return "OUT"
    } if (ref === "11") {
        return "NOV"
    } if (ref === "12") {
        return "DEZ"
    }

}

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
]

