import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import lupa from "../../assets/lupa.svg";
import derecha from "../../assets/flecha-derecha.svg";
import izquierda from "../../assets/flecha-izquierda.svg";
import Style from "./MovieList.module.css";

export function MovieList() {
    const [peliculas, setPeliculas] = useState([])
    const [search, setSearch] = useState("")
    const [pagina, setPagina] = useState(1)
    const [filtro, setFiltro] = useState("popular")

    let apiPopular = "https://api.themoviedb.org/3/movie/popular?api_key=07c667a57e6c3db002cddc4b9fe4efaf&language=en-US&page=" + pagina
    let apiTopRated = ""

    const handleFilter = (e) => {
        setFiltro(e.target.name)
        fetchMovies()
    }

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
        }
    }

    const changePage = (move) => {
        console.log(pagina)
        console.log(move)
        if(pagina === 1 && move === "back") {
            return
        }
        else if (move === "next") {
            setPagina(pagina + 1)
        } else {
            setPagina(pagina - 1)
        }
    }

    const findMovie = (e) => {
        const apiSearch = "https://api.themoviedb.org/3/search/movie?api_key=07c667a57e6c3db002cddc4b9fe4efaf&language=en-US&page=1&include_adult=false&query=" + search
        fetch(apiSearch)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPeliculas(data.results)
            })
    }

    useEffect(() => {
        apiPopular = "https://api.themoviedb.org/3/movie/popular?api_key=07c667a57e6c3db002cddc4b9fe4efaf&language=en-US&page=" + pagina
        apiTopRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=07c667a57e6c3db002cddc4b9fe4efaf&language=en-US&page=" + pagina
        fetchMovies()
    }, [pagina])

    return (
        <div className="m-3">
            <div className="w-full justify-center">
                <h1 className="text-3xl mb-4 self-center w-full">Lista de peliculas</h1>
            </div>
            <div className="flex flex-row">
                <div className="justify-center self-center h-full">
                    Filtro:
                </div>
                <ul className="flex flex-row ml-1">
                    <li className="ml-2 bg-lime-900 rounded p-1 hover:bg-lime-800">
                        <button name="popular" onClick={handleFilter}>Populares</button>
                    </li>
                    <li className="ml-2 bg-lime-900 rounded p-1 hover:bg-lime-800">
                        <button name="topRate" onClick={handleFilter}>Mejor valoradas</button>
                    </li>
                </ul>
            </div>
            <div className="flex flex-row justify-center">
                <div className="bg-green-900 p-3 h-full rounded-l-lg hover:cursor-pointer" onClick={findMovie}><img src={lupa} alt="Buscar" width={15} /></div>
                <input className="text-black p-1 rounded-r-lg outline-0 w-96" value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
            </div>
            <ul>
                {peliculas.map((pelicula) => {
                    return (
                        <li key={pelicula.id}>
                            <MovieCard />
                        </li>
                    )
                })}
            </ul>
            <div className="flex justify-center">
                <div onClick={()=>changePage("back")} className="hover:cursor-pointer ml-1 mr-1 w-5"><img src={izquierda} alt="back"  /></div>
                <div>{pagina}</div>
                <div onClick={()=>changePage("next")} className="hover:cursor-pointer ml-1 mr-1 w-5"><img src={derecha} alt="next" /></div>
            </div>
        </div>
    )
}