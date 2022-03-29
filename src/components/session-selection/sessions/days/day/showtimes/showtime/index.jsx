import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Showtime({ showtimeData }) {
    const { id, name } = showtimeData;
    
    return (
        <Link to={'/assentos/' + id}>
            <Container>
                {name}
            </Container>
        </Link>
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