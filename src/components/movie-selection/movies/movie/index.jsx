import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Movie({movieData}) {
    const { id, posterURL, title } = movieData

    return (
        <Link to={'sessoes/' + id}>
            <Container>
                <img src={posterURL} alt={title} />
            </Container>
        </Link>
    )
}

const Container = styled.div`
    width: 145px;
    height: 209px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    
    background-color: #fff;

    img {
        width: 129px;
        height: 193px;
    }
`;