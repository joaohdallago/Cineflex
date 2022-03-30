import styled from 'styled-components'
import { useState } from 'react';

import Seats from "./seats"
import TextInputs from './text-inputs';
import BookSeatButton from './book-seat-button';

export default function SeatSelectionMain({ seatSelectionData, purchaseDataState }) {
    const selectedIdsState = useState([])
    const selectedNamesState = useState([])
    const customerDataState = useState({
        name: '',
        cpf:''
    });
    
    const [ selectedIds ] = selectedIdsState;
    const [ selectedNames ] = selectedNamesState;
    const [ customerData ] = customerDataState;

    const { seats } = seatSelectionData;

    const bookSeatData = {
        ids: selectedIds,
        ...customerData
    }

    return (
        <Container>
            <Seats {...{seats, selectedIdsState, selectedNamesState}}/>
            <TextInputs {...{customerDataState}}/>
            <BookSeatButton {...{bookSeatData, seatSelectionData, selectedNames, purchaseDataState}}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
`;