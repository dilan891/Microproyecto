import styled from "./MovieCard.module.css";
import React from 'react';

export function MovieCard() {
    return(
        <form>

<div class={styled.margin}></div>
<div class={styled.card}>
<img class={styled.imagen} src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6jOpyXVzQyYL4QB12VRpHUxdwg1.jpg"/>
  <div class={styled.container2}>
  <h2 class={styled.title}>Título</h2>
  <p class={styled.date}>11/03/2023</p>
  </div>
</div>

    </form>
    )
}

