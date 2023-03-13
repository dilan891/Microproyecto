import styled from "./MovieCardDetails.module.css";
import { useEffect, useState } from "react";
import React from 'react';
import { StyledRating } from "../Rating/Rating"

export function MovieCardDetails(Props) {
  const [movie, setMovie] = useState({ genres: [{ name: "", id: 0 }] });

  const selectLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case "en":
        return "Inglés"
      case "es":
        return "Español"
      case "fr":
        return "Francés"
      case "de":
        return "Alemán"
      case "it":
        return "Italiano"
      case "ja":
        return "Japonés"
      case "pt":
        return "Portugués"
      case "ru":
        return "Ruso"
      case "zh":
        return "Chino"
      default:
        return "No disponible"
    }
  }

  useEffect(() => {
    setMovie(Props.movie)
  }, [Props.movie])
  return (
    <div className={styled.row}>
      <span className={styled.close} onClick={Props.close}>&times;</span>
      <div className={styled.column}>
        <div className={styled.card2}>
          <div className={styled.container}>
            <img className={styled.imagen} width={500} src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + movie.poster_path} />
            <div className={styled.content}><div></div>
              <h1 className={styled.title}>
                {movie.title}
              </h1>
              <span className={styled.text}>({movie.release_date})</span>

              <h2 className={styled.subTitle}>Descripción</h2>
              <p className={styled.description}>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styled.row}>
        <div className={styled.column}>
          <div className={styled.card2}>
            <div className={styled.container}>
              <img className={styled.imagen} width={500} src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + movie.poster_path} />
              <div className={styled.content}><div></div>
                <h1 className={styled.title}>{movie.title}<span className={styled.text}>({movie.release_date})</span></h1>
                <h2 className={styled.subTitle}>Descripción</h2>
                <p className={styled.description}>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styled.column}>
          <div className={styled.card}>
            <div className={styled.container2}>
              <span className={styled.close} onClick={Props.close}>&times;</span>
              <div className={styled.content}><div></div>
                <h2 className={styled.subTitle}>Géneros</h2>
                <p className={styled.text}>{(!movie.genres) ? null : movie.genres.map((genre) => {
                  return (
                    <span>{genre.name} </span>
                  )
                })}</p>
                <h2 className={styled.subTitle}>Lenguaje Original</h2>
                <p className={styled.text}>{selectLenguaje(movie.original_language)}</p>
                <h2 className={styled.subTitle}>Presupuesto</h2>
                <p className={styled.text}>{(movie.budget == 0) ? <>no disponible</> : movie.budget + "$"}</p>
                <h2 className={styled.subTitle}>Compañías de Producción</h2>
                <p className={styled.text}>{(!movie.production_companies) ? null : movie.production_companies.map((companie) => {
                  return (
                    <span>{companie.name} </span>
                  )
                })}</p>
                <h2 className={styled.subTitle}>Estado de la película</h2>
                <p className={styled.text}>{movie.status}</p>
                <h2 className={styled.subTitle}>Rating de Popularidad</h2>

                <p className={styled.text}> <StyledRating
                  value={movie.vote_average / 2}
                /> </p> <span className={styled.text}>   {movie.vote_average}  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>

      )
}