import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Topbar from '../topbar'
import Header from '../header'
import Footer from '../footer'

export default function SeatSelection() {
    const { idSessao } = useParams();
    const seatSelectionDataURL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
    
    const [seatSelectionData, setSeatSelectionData] = useState(
        {
            movie: {},
            day: {weekday: ''}
        }
    );

    useEffect(() => {
        const promise = axios.get(seatSelectionDataURL);

        promise.then(response => setSeatSelectionData(response.data))
    }, [])    

    return (
        <>
            <Topbar />
            <Header text='Selecione o(s) assento(s)'/>
            <h1>{seatSelectionData.id}</h1>
            <Footer movieData={seatSelectionData.movie} weekday={seatSelectionData.day.weekday}/>
        </>
    )
}