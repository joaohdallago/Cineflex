import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Topbar from '../topbar'
import Header from '../header'
import SeatSelectionMain from './seat-selection-main'
import Footer from '../footer'

export default function SeatSelection({ purchaseDataState }) {
    const { idSessao } = useParams();
    const seatSelectionDataURL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
    
    const [seatSelectionData, setSeatSelectionData] = useState(
        {
            movie: {},
            day: {weekday: ''},
            seats: []
        }
    );

    useEffect(() => {
        const promise = axios.get(seatSelectionDataURL);

        promise.then(response => setSeatSelectionData(response.data))
    }, [])

    const footerData = {
        movieData: seatSelectionData.movie,
        weekday: seatSelectionData.day.weekday
    }


    return (
        <>
            <Topbar />
            <Header text='Selecione o(s) assento(s)'/>
            <SeatSelectionMain {...{seatSelectionData, purchaseDataState}}/>
            <Footer {...footerData}/>
        </>
    )
}   