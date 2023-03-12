import styled from "./MovieListView.module.css"
import { MovieCard } from "../MovieCard/MovieCard";
import {useState} from 'react'
import { ModalView } from "../ModalView/ModalView";

export function MovieListView(Props){
    const {peliculas} = Props
    const [modal, setModal] = useState(false)
    const [idMovie, setIdMovie] = useState(0)

    if(peliculas.length === 1&& peliculas[0].error === 404) return (
        <div className={styled.error}>
            <h1>No se encontraron resultados</h1>
        </div>
    )

    const handleModal = (id) => {
        setIdMovie(id)
        console.log(idMovie)
        setModal(!modal)
    }

    return (
        <>  
            <ModalView modal={modal} close={handleModal} idMovie={idMovie}/>
            {peliculas.map((pelicula) => {
                    return (
                        <li className={styled.list_item} key={pelicula.id}>
                            <MovieCard title={pelicula.title} handleModal={()=>{handleModal(pelicula.id)}} release_date={pelicula.release_date} img={pelicula.poster_path}  />
                        </li>
                    )
            })}
        </>
    )
}