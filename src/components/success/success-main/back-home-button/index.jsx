import { Link } from "react-router-dom";
import styled from "styled-components"

export default function BackHomeButton() {
    return (
        <Link to='/'>
            <Container>
                Voltar pra Home
            </Container>
        </Link>
    )
}

const Container = styled.div`
    width: 225px;
    height: 42px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: 30px auto 0;
    border-radius: 3px;
    
    font-size: 18px;
    letter-spacing: 0.04em;
    
    color: #fff;
    background-color: #E8833A;

`;