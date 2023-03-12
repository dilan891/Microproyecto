import styled from "./MovieCardDetails.module.css";
import React from 'react';

export function MovieCardDetails() {
    return(
        <form>

<div class={styled.card}>
<div className={styled.container}>
<img className={styled.imagen} src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6jOpyXVzQyYL4QB12VRpHUxdwg1.jpg"/>
  <div class="overflow-auto ..." className={styled.content}><div class="overflow-auto ..."></div>
  <h1 className={styled.title}>Título<span className={styled.text}>(2022)</span></h1>
  <h2 className={styled.subTitle}>Géneros</h2>
  <p className={styled.text}>Drama</p>
  <h2 className={styled.subTitle}>Descripción</h2>
  <p className={styled.text}>Después de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violencia, una mujer pone en marcha un plan de venganza cuidadosamente planeado.</p>
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

    </form>
    )
}

