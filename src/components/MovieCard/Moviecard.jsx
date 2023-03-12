import styled from "./MovieCard.module.css";
import React from 'react';

export function MovieCard(Props) {

    const handleModal = (e) => {
        Props.handleModal()
    }

    return ( 
        <>
            <div className={styled.margin}></div>
            <div className={styled.card} onClick={handleModal}>
                <img className={styled.imagen} src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + Props.img} />
                <div className={styled.container2}>
                    <h2 className={styled.title}>{Props.title}</h2>
                    <p className={styled.date}>{Props.release_date}</p>
                </div>
            </div>
        </>
    )
}

