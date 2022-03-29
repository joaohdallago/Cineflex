import styled from 'styled-components'

import Seats from "./seats"
import TextInputs from './text-inputs';
import BookSeatButton from './book-seat-button';

export default function SeatSelectionMain({ seats, purchaseData, setPurchaseData }) {
    return (
        <Container>
            <Seats {...{seats, purchaseData, setPurchaseData}}/>
            <TextInputs />
            <BookSeatButton />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
`;