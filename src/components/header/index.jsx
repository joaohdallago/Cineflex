import styled from 'styled-components';

export default function Header({ text }) {
    return (
        <Container>
            {text}
        </Container>
    )
}

const Container = styled.div`
    height: 110px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;

    color: #293845;
`;