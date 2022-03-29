import styled from 'styled-components'

import Day from "./day"

export default function Days({ movieData }) {
    const { days } = movieData;

    return (
        <Container>
            {days.map(dayData => <Day {...{dayData}}/>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;
`