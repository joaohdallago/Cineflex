import styled from 'styled-components'

export default function Topbar() {
    return (
        <Container>
            CINEFLEX
        </Container>
    )
}

const Container = styled.div `
    height: 67px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 34px;
    
    color: #E8833A;
    background-color: #C3CFD9;
`