import axios from "axios";
import { useEffect, useState } from 'react';
import styled from 'styled-components'

import Movie from "./movie";

export default function Movies() {
    const [movieList, setMovieList] = useState([])

    const movieListURL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies'
    
    useEffect(() => {
        const promise = axios.get(movieListURL);

        promise.then(response => setMovieList(response.data))
    }, [])
    
    return (
        <Container>
            {movieList.map(movieData => <Movie {...{movieData}}/>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 11px;

    padding: 0 25px;
`