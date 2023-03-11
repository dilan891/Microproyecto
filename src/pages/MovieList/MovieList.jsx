import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import lupa from "../../assets/lupa.svg";
import derecha from "../../assets/flecha-derecha.svg";
import izquierda from "../../assets/flecha-izquierda.svg";
import style from "./MovieList.module.css";
import { async } from "@firebase/util";

export function MovieList() {
    const [peliculas, setPeliculas] = useState([])
    const [search, setSearch] = useState("")
    const [pagina, setPagina] = useState(1)
    const [filtro, setFiltro] = useState("popular")

    let apiPopular = "https://api.themoviedb.org/3/movie/popular?api_key=07c667a57e6c3db002cddc4b9fe4efaf&language=en-US&page=" + pagina
    let apiTopRated = ""
    let uncoming = ""

    const handleFilter = (e) => {
        setFiltro(e.target.name)
        setPagina(1)
        console.log(filtro)
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
        uncoming = "https://api.themoviedb.org/3/movie/upcoming?api_key=07c667a57e6c3db002cddc4b9fe4efaf&language=en-US&page=" + pagina
        fetchMovies()
    }, [pagina, filtro])

    return (
        <div className={style.content}>
            <div className={style.title}>
                <h1 className={style.titleContent}>Lista de peliculas</h1>
            </div>
            <div className={style.fila}>
                <div className={style.filtroTitle}>
                    Filtro:
                </div>
                <ul className={style.filtros}>
                    <li>
                        <button className={style.button} name="popular" onClick={handleFilter}>Populares</button>
                    </li>
                    <li>
                        <button className={style.button} name="topRate" onClick={handleFilter}>Mejor valoradas</button>
                    </li>
                    <li>
                        <button className={style.button} name="uncoming" onClick={handleFilter}>Proximamente</button>
                    </li>
                </ul>
            </div>
            <div className={style.filaCenter}>
                <div className={style.buscar} onClick={findMovie}><img src={lupa} alt="Buscar" width={15} /></div>
                <input className={style.input} value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
            </div>
            <ul className={style.list}>
                {peliculas.map((pelicula) => {
                    return (
                        <li className={style.list_item} key={pelicula.id}>
                            <MovieCard title={pelicula.title} release_date={pelicula.release_date} img={pelicula.poster_path}/>
                        </li>
                    )
                })}
            </ul>
            <div className={style.filaCenter}>
                <div onClick={()=>changePage("back")} className={style.flecha}><img className={style.flecha} src={izquierda} alt="back"  /></div>
                <div className={style.centerN}>{pagina}</div>
                <div onClick={()=>changePage("next")} className={style.flecha}><img className={style.flecha} src={derecha} alt="next" /></div>
            </div>
        </div>
    )
}