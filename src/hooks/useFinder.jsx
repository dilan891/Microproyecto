import { useState, useEffect } from 'react'

export function useFinder() {
    const [peliculas, setPeliculas] = useState([])
    const [search, setSearch] = useState("")
    const [pagina, setPagina] = useState(1)
    const [filtro, setFiltro] = useState("popular")

    let apiPopular = "https://api.themoviedb.org/3/movie/popular?api_key=07c667a57e6c3db002cddc4b9fe4efaf&language=en-US&page=" + pagina
    let apiTopRated = ""
    let uncoming = ""

    const fetchMovies = () => {
        switch (filtro) {
            case "popular":
                fetch(apiPopular)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setPeliculas(data.results)
                    })
                break;
            case "topRate":
                fetch(apiTopRated)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setPeliculas(data.results)
                    }
                    )
                break;
            case "uncoming":
                fetch(uncoming)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setPeliculas(data.results)
                    }
                    )
                break;
            default:
                break;
            
        }
    }

    const findMovie = (e) => {
        setPeliculas([])
        setFiltro("search")
        const apiSearch = "https://api.themoviedb.org/3/search/movie?api_key=07c667a57e6c3db002cddc4b9fe4efaf&language=en-US&page=1&include_adult=false&query=" + search
        fetch(apiSearch)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.results.length === 0) {
                    setPeliculas([
                        {title: "No se encontraron resultados",error: 404}
                    ])
                }else{
                    setPeliculas(data.results)
                }
            })
    }

    useEffect(() => {
        apiPopular = "https://api.themoviedb.org/3/movie/popular?api_key=07c667a57e6c3db002cddc4b9fe4efaf&language=en-US&page=" + pagina
        apiTopRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=07c667a57e6c3db002cddc4b9fe4efaf&language=en-US&page=" + pagina
        uncoming = "https://api.themoviedb.org/3/movie/upcoming?api_key=07c667a57e6c3db002cddc4b9fe4efaf&language=en-US&page=" + pagina
        fetchMovies()
    }, [pagina, filtro])

    return{
            peliculas,
            search,
            setSearch,
            pagina,
            setPagina,
            filtro,
            setFiltro,
            findMovie
        }
}
