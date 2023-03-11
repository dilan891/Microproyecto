import styled from "./MovieListView.module.css"
import { MovieCard } from "../MovieCard/MovieCard";
import React from 'react'

export function MovieListView(Props){
    const {peliculas} = Props

    if(peliculas.length === 1&& peliculas[0].error === 404) return (
        <div className={styled.error}>
            <h1>No se encontraron resultados</h1>
        </div>
    )

    return (
        <>  
            {peliculas.map((pelicula) => {
                    return (
                        <li className={styled.list_item} key={pelicula.id}>
                            <MovieCard title={pelicula.title} release_date={pelicula.release_date} img={pelicula.poster_path}/>
                        </li>
                    )
            })}
        </>
    )
}