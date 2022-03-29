import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Topbar from "../topbar";
import Header from "../header"
import Sessions from "./sessions";
import Footer from "../footer";

export default function SessionSelection() {
    const [movieData, setMovieData] = useState({days: []})

    const { idFilme } = useParams();

    const movieDataURL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;

    useEffect(() => {
        const promise = axios.get(movieDataURL);

        promise.then(response => setMovieData(response.data))
    }, [])
    return (
        <>
            <Topbar />
            <Header text='Selecione o horário'/>
            <Sessions {...{movieData}}/>
            <Footer {...{movieData}}/>
        </>
    )
}