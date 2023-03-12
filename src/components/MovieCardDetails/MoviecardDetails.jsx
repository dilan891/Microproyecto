import styled from "./MovieCardDetails.module.css";
import React from 'react';
import { FaHeart } from "react-icons/fa";
import { RiEmotionHappyLine } from "react-icons/ri";
import { RiEmotionLaughLine } from "react-icons/ri";
import { RiEmotionNormalLine } from "react-icons/ri";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { IoMdSad } from "react-icons/io";

var value;

function StyledRating(props) {
  value = props.value
  if (value==1) {
    return <p className={styled.text}><IoMdSad className={styled.icon5} /> <RiEmotionUnhappyLine className={styled.icon6} /> <RiEmotionNormalLine className={styled.icon6} /> <RiEmotionHappyLine className={styled.icon6} /> <RiEmotionLaughLine className={styled.icon6} /></p>;
  }
  if (value==2) {
    return <p className={styled.text}><IoMdSad className={styled.icon6} /> <RiEmotionUnhappyLine className={styled.icon4} /> <RiEmotionNormalLine className={styled.icon6} /> <RiEmotionHappyLine className={styled.icon6} /> <RiEmotionLaughLine className={styled.icon6} /></p>
  }
  if (value==3) {
    return <p className={styled.text}><IoMdSad className={styled.icon6} /> <RiEmotionUnhappyLine className={styled.icon6} /> <RiEmotionNormalLine className={styled.icon3} /> <RiEmotionHappyLine className={styled.icon6} /> <RiEmotionLaughLine className={styled.icon6} /></p>
  }
  if (value==4) {
    return <p className={styled.text}><IoMdSad className={styled.icon6} /> <RiEmotionUnhappyLine className={styled.icon6} /> <RiEmotionNormalLine className={styled.icon6} /> <RiEmotionHappyLine className={styled.icon2} /> <RiEmotionLaughLine className={styled.icon6} /></p>
  }
  if (value==5) {
    return <p className={styled.text}><IoMdSad className={styled.icon6} /> <RiEmotionUnhappyLine className={styled.icon6} /> <RiEmotionNormalLine className={styled.icon6} /> <RiEmotionHappyLine className={styled.icon6} /> <RiEmotionLaughLine className={styled.icon} /></p>
  }
  }



export function MovieCardDetails() {
    return(
        <form>

<div className={styled.row}>
<span className={styled.close}>&times;</span>
  <div className={styled.column}>
  <div className={styled.card}>
  <div className={styled.container}>
<img className={styled.imagen} src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6jOpyXVzQyYL4QB12VRpHUxdwg1.jpg"/>
  <div class="overflow-auto ..." className={styled.content}><div class="overflow-auto ..."></div>
  <h1 className={styled.title}>Título<span className={styled.text}>(2022)</span></h1>
  <h2 className={styled.subTitle}>Descripción</h2>
  <p className={styled.description}>Después de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violen de una infancia marcada por el dolor y la violencia, una mujer pone en marcha un plan de venganza cuidadosamente planeado.</p>
  </div>
  </div>
  </div>
  </div>

  <div className={styled.column}>
  <div className={styled.card}>
  <div className={styled.container2}>
  <div class="overflow-auto ..." className={styled.content}><div class="overflow-auto ..."></div>
  <h2 className={styled.subTitle}>Géneros</h2>
  <p className={styled.text}>Drama</p>
  <h2 className={styled.subTitle}>Lenguaje Original</h2>
  <p className={styled.text}>Coreano</p>
  <h2 className={styled.subTitle}>Presupuesto</h2>
  <p className={styled.text}>0000</p>
  <h2 className={styled.subTitle}>Compañías de Producción</h2>
  <p className={styled.text}>Netflix</p>
  <h2 className={styled.subTitle}>Estado de la película</h2>
  <p className={styled.text}>Finalizada</p>
  <h2 className={styled.subTitle}>Rating de Popularidad</h2>

  <p className={styled.text}> <StyledRating
      value={3}
    /> </p> <span className={styled.text}>   9.8   </span>

  </div>
  </div>
  </div>
  </div>


</div>


    </form>
    )
}

