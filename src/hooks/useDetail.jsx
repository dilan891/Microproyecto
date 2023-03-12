import { useEffect,useState } from "react";

export function useDetail() {
    const [movie, setMovie] = useState({});
    const [idMovie, setIdMovie] = useState(0);
    const api = "https://api.themoviedb.org/3/movie/" + idMovie + "?api_key=07c667a57e6c3db002cddc4b9fe4efaf&language=en-US"

    useEffect(() => {
        console.log(idMovie)
        if (idMovie === 0) return
        fetch(api)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovie(data)
            })
    }, [idMovie]);

    const setIdMovies = (id) => {
        setIdMovie(id)
    }

    return {movie,setIdMovies}

}