import styled from 'styled-components'

import Showtimes from './showtimes';

export default function Day({ dayData }) {
    const { weekday, date, showtimes } = dayData;
    const showtimeList = showtimes;

    return (
        <Container>
            <span>
                {weekday} - {date}
            </span>
            <Showtimes {...{showtimeList}}/>
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
`;