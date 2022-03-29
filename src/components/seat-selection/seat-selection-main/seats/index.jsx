import { useState } from 'react';
import styled from 'styled-components'

import Seat from "./seat"
import SeatsSubtitles from './seats-subtitles';

export default function Seats({seats, purchaseData, setPurchaseData}) {
    const [selectedIds, setSelectedIds] = useState([])

    return (
        <Container>
            {seats.map(seatData => <Seat {...seatData} {...{selectedIds, setSelectedIds}}/>)}
            <SeatsSubtitles />
        </Container>
    )
}
 
const Container = styled.div`
    width: 323px;

    display: flex;
    flex-wrap: wrap;
    column-gap: 7px;
    row-gap: 18px;
`;