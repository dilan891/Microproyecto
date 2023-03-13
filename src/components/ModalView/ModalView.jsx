import { MovieCardDetails } from "../MovieCardDetails/MovieCardDetails"
import styled from "./ModalView.module.css"
import { useDetail } from "../../hooks/useDetail"
import { useEffect } from "react"

export function ModalView(Props) {
    const { movie,setIdMovies} = useDetail()

    useEffect(() => {
        setIdMovies(Props.idMovie)
    }, [Props.modal,Props.idMovie])

    if (!Props.modal) return null

    else {
        return (
            <div id={styled.modal} className={styled.modal}>
                <MovieCardDetails movie={movie} close={Props.close}/>
            </div>
        )
    }

}