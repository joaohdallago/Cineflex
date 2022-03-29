import styled from "styled-components"

export default function BookSeatButton() {
    return (
        <Container>
            Reservar assento(s)
        </Container>
    )
}

const Container = styled.div`
    width: 225px;
    height: 42px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 3px;

    font-size: 18px;
    letter-spacing: 0.04em;

    color: #fff;
    background-color: #E8833A;
`;