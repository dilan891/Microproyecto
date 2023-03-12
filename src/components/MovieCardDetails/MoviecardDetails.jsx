import styled from "./MovieCardDetails.module.css";
import { useEffect, useState } from "react";

export function MovieCardDetails(Props) {
  const [movie, setMovie] = useState({ genres: [{ name: "", id: 0 }] });

  useEffect(() => {
    setMovie(Props.movie)
  }, [Props.movie])

  return (
    <>
      <div className={styled.card}>
        <div className={styled.container}>
          <img className={styled.imagen} src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6jOpyXVzQyYL4QB12VRpHUxdwg1.jpg" />
          <div className={styled.content}><div></div>
            <h1 className={styled.title}>
              {movie.title}
              <span className={styled.text}>{movie.release_date}
              </span>
            </h1>
            <h2 className={styled.subTitle}>Géneros</h2>
            <p className={styled.text}>
              {(movie.genres !== undefined) ? movie.genres.map((genre) => {
                return <span key={genre.id}>{genre.name},</span>
              }): null}
            </p>
            <h2 className={styled.subTitle}>Descripción</h2>
            <p className={styled.description}>Después de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violencia, una mujer pone en marcha un plan de venganza cuidadosamente planeado.</p>
            <h2 className={styled.subTitle}>Lenguaje Original</h2>
            <p className={styled.text}>Coreano</p>
            <h2 className={styled.subTitle}>Presupuesto</h2>
            <p className={styled.text}>0000</p>
            <h2 className={styled.subTitle}>Compañías de Producción</h2>
            <p className={styled.text}>Netflix</p>
            <h2 className={styled.subTitle}>Estado de la película</h2>
            <p className={styled.text}>Finalizada</p>
            <h2 className={styled.subTitle}>Rating de Popularidad</h2>
            <p className={styled.text}>Cinco Estrellitas</p>
          </div>
        </div>
      </div>
    </>
  )
}

