import { useEffect,useState } from "react";

export function useDetail() {
    const [movie, setMovie] = useState({});
    const idMovie = window.location.pathname.split("/")[2];
    const api = "https://api.themoviedb.org/3/movie/" + idMovie + "?api_key=07c667a57e6c3db002cddc4b9fe4efaf&language=en-US"

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovie(data)
            })
    }, []);

    return {movie}

}