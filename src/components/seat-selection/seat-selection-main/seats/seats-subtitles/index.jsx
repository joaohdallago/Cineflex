import styled from "styled-components"

export default function SeatsSubtitles() {
    const selectedStyle = 'border: 1px solid #1AAE9E; background-color: #8DD7CF;'
    const availableStyle = 'border: 1px solid #7B8B99; background-color: #C3CFD9;;'
    const unavailableStyle = 'border: 1px solid #F7C52B; background-color: #FBE192;'

    return (
        <Container>
            <ItemContainer individualStyle={selectedStyle}>
                <div />
                <span>Selecionado</span>
            </ItemContainer>

            <ItemContainer individualStyle={availableStyle}>
                <div />
                <span>Disponível</span>
            </ItemContainer>

            <ItemContainer individualStyle={unavailableStyle}>
                <div />
                <span>Indisponível</span>
            </ItemContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 25px;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        width: 25px;
        height: 25px;

        border-radius: 17px;

        ${props => props.individualStyle}
    }
`;
