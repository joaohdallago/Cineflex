import styled from 'styled-components'

import Showtime from './showtime';

export default function Day({ dayData }) {
    const { weekday, date, showtimes } = dayData;

    return (
        <Container>
            <span>
                {weekday} - {date}
            </span>
            <div>
                {showtimes.map(showtimeData => <Showtime {...{showtimeData}}/>)}
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;

    span {
        font-size: 20px;
        letter-spacing: 0.02em;

        color: #293845;
    }

    div {
        display: flex;
        gap: 9px;
    }
`;