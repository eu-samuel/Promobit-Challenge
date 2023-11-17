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

export const genresList = ["Ação", "Aventura", "Animação", "Comédia", "Crime", "Documentário", "Drama", "Família", "Fantasia", "História",
    "Terror", "Musical", "Mistério", "Romance", "Ficção Científica", "Cinema TV", "Thriller", "Guerra", "Faroeste"]