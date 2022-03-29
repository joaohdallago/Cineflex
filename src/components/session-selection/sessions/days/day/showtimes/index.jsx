import styled from 'styled-components'

import Showtime from './showtime'

export default function Showtimes({showtimeList}) {
    return (
        <Container>
            {showtimeList.map(showtimeData => <Showtime {...{showtimeData}}/>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 9px;
`