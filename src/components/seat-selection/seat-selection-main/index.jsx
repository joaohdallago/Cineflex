import styled from 'styled-components'

import Seats from "./seats"
import Forms from "./forms"

export default function SeatSelectionMain({ seats, purchaseData, setPurchaseData }) {
    return (
        <Container>
            <Seats {...{seats, purchaseData, setPurchaseData}}/>
            <Forms />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
`;