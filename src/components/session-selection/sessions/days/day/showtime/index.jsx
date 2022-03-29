import styled from 'styled-components';

export default function Showtime({ showtimeData }) {
    const { name } = showtimeData;
    
    return (
        <Container>
            {name}
        </Container>
    )
}

const Container = styled.div`
    width: 83px;
    height: 43px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 3px;
    font-size: 18px;
    letter-spacing: 0.02em;

    color: #FFFFFF;
    background-color: #E8833A;
`