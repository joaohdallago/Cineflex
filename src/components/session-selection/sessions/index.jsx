import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Days from "./days";
import Day from "./days/day";
import Footer from "../../footer";

export default function Sessions() {
    const [movieData, setMovieData] = useState({})

    const { idFilme } = useParams();

    const movieDataURL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;

    useEffect(() => {
        const promise = axios.get(movieDataURL);

        promise.then(response => setMovieData(response.data))
    }, [])

    return (
        <>  
            <Days {...{movieData}}/>
            <Footer {...{movieData}}/>
        </>
    )
}