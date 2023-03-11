import {MovieCard} from "../../components/MovieCard/MovieCard";

export function MovieList() {



    return(
        <>
            <ul>
                <li>
                    <MovieCard />
                </li>
                <li>
                    <MovieCard />
                </li>
            </ul>
        </>
    )
}