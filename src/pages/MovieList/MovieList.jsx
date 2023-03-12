import {MovieCard} from "../../components/MovieCard/MovieCard";
import {MovieCardDetails} from "../../components/MovieCardDetails/MovieCardDetails";

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
                <li>
                    <MovieCardDetails />
                </li>
            </ul>
        </>
    )
}