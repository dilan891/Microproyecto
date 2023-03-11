import { Loading } from "../../components/Loading/Loading";
import { useFinder } from "../../hooks/useFinder";

import lupa from "../../assets/lupa.svg";
import derecha from "../../assets/flecha-derecha.svg";
import izquierda from "../../assets/flecha-izquierda.svg";
import style from "./MovieList.module.css";
import { MovieListView } from "../../components/MovieListView/MovVieListView";


export function MovieList() {
    const {peliculas,search,pagina,filtro,setSearch,setPagina,findMovie,setFiltro} = useFinder()

    const handleFilter = (e) => {
        setFiltro(e.target.name)
        setPagina(1)
        console.log(filtro)
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

    return (
        <div className={style.content}>
            
            <div className={style.title}>
                <h1 className={style.titleContent}>Lista de películas</h1>
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
                {(peliculas.length === 0)? <Loading /> : <MovieListView peliculas={peliculas} />}
            </ul>
            <div className={style.filaCenter}>
                <div onClick={()=>changePage("back")} className={style.flecha}><img className={style.flecha} src={izquierda} alt="back"  /></div>
                <div className={style.centerN}>{pagina}</div>
                <div onClick={()=>changePage("next")} className={style.flecha}><img className={style.flecha} src={derecha} alt="next" /></div>
            </div>
        </div>
    )
}